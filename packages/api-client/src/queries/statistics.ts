import gql from 'graphql-tag';

// TODO изучить и применить прокидывание переменных в фрагмент
export const STATISTICS_FRAGMENT = gql`
  fragment StatisticsBase on CustomStatisticDto {
    period

    users
    payments {
      qiwi {
        amount
        total
      }
      webmoney {
        amount
        total
      }
      yoomoney {
        amount
        total
      }
    }
  }
`;

export const STATISTICS_BY = gql`
  query statisticsBy(
    $period: String
    $users: Boolean = false
    $payments: Boolean = false
    $startDate: Float
    $endDate: Float
  ) {
    statisticsBy(
      input: { period: $period, users: $users, payments: $payments, startDate: $startDate, endDate: $endDate }
    ) {
      period
      users @include(if: $users)
      payments @include(if: $payments) {
        qiwi {
          amount
          total
        }
        webmoney {
          amount
          total
        }
        yoomoney {
          amount
          total
        }
      }
    }
  }
`;
