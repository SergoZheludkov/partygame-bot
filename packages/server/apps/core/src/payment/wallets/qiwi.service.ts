import { HttpService, Injectable } from '@nestjs/common';
import { sub } from 'date-fns';

export enum QiwiOperations {
  ALL = 'ALL',
  IN = 'IN',
  OUT = 'OUT',
  QIWI_CARD = 'QIWI_CARD',
}

interface WalletOptions {
  url: string;
  rows?: number;
  operation?: QiwiOperations;
  sources?: Array<string>;
  startDate?: Date;
  endDate?: Date;
  nextTxnDate?: Date;
  nextTxnId?: number;
}

interface ExcgangeRate {
  set: string;
  from: string;
  to: string;
  rate: number;
}

interface QiwiReqData {
  number: string;
  token: string;
}

@Injectable()
export class QiwiService {
  TOKEN: string;

  API_URI = 'https://edge.qiwi.com';

  routes = {
    GET_EXCHANGE_RATES: `${this.API_URI}/sinap/crossRates`,
    GET_OPERATION_HISTORY: (wallet: string) => `${this.API_URI}/payment-history/v2/persons/${wallet}/payments`,
  };

  codeCurrency: Record<number, string> = {
    643: 'RUB',
    840: 'USD',
    978: 'EUR',
    398: 'KZT',
  };

  currencyCode: Record<string, number> = {
    RUB: 643,
    USD: 840,
    EUR: 978,
    KZT: 398,
  };

  recipients = {
    banks: {
      alfabank: { id: 464, accountType: 1 },
      tinkoff: { id: 466, accountType: 1 },
      ao_otp_bank: { id: 804, accountType: 1 },
      ao_rosselhozbank: { id: 810, accountType: 5 },
      russkiy_standard: { id: 815, accountType: 1 },
      pao_vtb: { id: 816, accountType: 5 },
      promsvyazbank: { id: 821, accountType: 7 },
      pao_sberbank: { id: 870, accountType: 5 },
      renessans_credit: { id: 881, accountType: 1 },
      moskovskiy_kreditniy_bank: { id: 1134, accountType: 5 },
    },
    cards: {
      visa_sng: 1960,
      visa_rus: 1963,
      mastercard_sng: 21012,
      mastercard_rus: 21013,
      mir: 31652,
    },
    differentServices: {
      onlime: 674,
      podari_jizn: 1239,
    },
    qiwi: 99,
  };

  constructor(private readonly httpService: HttpService) {}

  get token() {
    return this.TOKEN;
  }

  set token(qiwi_token: string) {
    this.TOKEN = qiwi_token;
  }

  getHeaders(token: string) {
    return {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'content-type': 'application/json',
    };
  }

  getCodeToCurrency(code: number): string {
    return this.codeCurrency[code] || 'ERR';
  }

  getCurrencyToCode(currency: string): number {
    return this.currencyCode[currency] || 111;
  }

  async getExpectedAmount(USD: number, token: string): Promise<string> {
    this.token = token;

    const exchangeRates = await this.getExchangeRates();
    const USD_Rates = exchangeRates.filter((rate) => Number(rate.to) === this.currencyCode.USD);

    const USDtoEUR = USD_Rates.find((rate) => Number(rate.from) === this.currencyCode.EUR);
    const USDtoRUB = USD_Rates.find((rate) => Number(rate.from) === this.currencyCode.RUB);
    const USDtoKZT = USD_Rates.find((rate) => Number(rate.from) === this.currencyCode.KZT);

    const EUR = Math.ceil((USDtoEUR && USD * USDtoEUR.rate) || USD * 0.9);
    const RUB = Math.ceil((USDtoRUB && USD * USDtoRUB.rate) || USD * 75);
    const KZT = Math.ceil((USDtoKZT && USD * USDtoKZT.rate) || USD * 430);

    this.token = '';

    return `${USD}/${EUR}/${RUB}/${KZT}`;
  }

  async get(options: WalletOptions) {
    const requestOptions = { ...options, headers: this.getHeaders(this.token) };
    try {
      const res = await this.httpService.get(requestOptions.url, requestOptions).toPromise();
      return res.data;
    } catch (e) {
      console.log(e);
      throw e.response;
    }
  }

  async getExchangeRates(): Promise<Array<ExcgangeRate>> {
    const options = { url: this.routes.GET_EXCHANGE_RATES };

    const res = await this.get(options);
    if (!res.result) return [];

    return res.result;
  }

  async getOperationHistory(wallet: QiwiReqData, requestOptions: Partial<WalletOptions>) {
    this.token = wallet.token;

    const now = new Date();
    const options = {
      url: this.routes.GET_OPERATION_HISTORY(wallet.number),
      params: {
        rows: 50,
        startDate: sub(now, { days: 30 }),
        endDate: now,
        ...requestOptions,
      },
    };

    const res = await this.get(options);

    this.token = '';

    if (!res.data) return [];
    return res.data;
  }
}
