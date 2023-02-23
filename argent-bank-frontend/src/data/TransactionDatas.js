/**
 * Javascript file containing mock data for acount and transactions.
 * @file
 */

export const userAccountData = {
    status: 200,
    message: "Successfully got user account data",
    body: {
      accountData: [
        {
          title: "Argent Bank Checking (x8349)",
          amount: "$2,082.79",
          description: "Available Balance",
          accountId: "checking",
        },
        {
          title: "Argent Bank Savings (x6712)",
          amount: "$10,928.42",
          description: "Available Balance",
          accountId: "savings",
        },
        {
          title: "Argent Bank Credit Card (x8349)",
          amount: "$184.30",
          description: "Current Balance",
          accountId: "credit-card",
        },
      ],
    },
  }

  export const userTransactionsData = {
    status: 200,
    message: "Successfully got account transactions data",
    body: {
      transactions: [
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "5.00",
          balance: "2082.79",
          type: "Electronic",
          category: "Sport",
          notes: "",
          transactionId: "checking1",
          updatedAt: "",
          accountId: "checking",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "10.00",
          balance: "2087.79",
          type: "Electronic",
          category: "Furnitures",
          notes: "Waiting for refund",
          transactionId: "checking2",
          updatedAt: "",
          accountId: "checking",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "20.00",
          balance: "2097.79",
          type: "Electronic",
          category: "Food",
          notes: "",
          transactionId: "checking3",
          updatedAt: "",
          accountId: "checking",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "30.00",
          balance: "2117.79",
          type: "Electronic",
          category: "Clothes",
          notes: "",
          transactionId: "checking4",
          updatedAt: "",
          accountId: "checking",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "40.00",
          balance: "2147.79",
          type: "Electronic",
          category: "Sport",
          notes: "",
          transactionId: "checking5",
          updatedAt: "",
          accountId: "checking",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "50.00",
          balance: "2187.79",
          type: "Electronic",
          category: "Food",
          notes: "",
          transactionId: "checking6",
          updatedAt: "",
          accountId: "checking",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "5.00",
          balance: "2082.79",
          type: "Electronic",
          category: "Sport",
          notes: "",
          transactionId: "savings1",
          updatedAt: "",
          accountId: "savings",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "10.00",
          balance: "2087.79",
          type: "Electronic",
          category: "Furnitures",
          notes: "Waiting for refund",
          transactionId: "savings2",
          updatedAt: "",
          accountId: "savings",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "20.00",
          balance: "2097.79",
          type: "Electronic",
          category: "Food",
          notes: "",
          transactionId: "savings3",
          updatedAt: "",
          accountId: "savings",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "30.00",
          balance: "2117.79",
          type: "Electronic",
          category: "Clothes",
          notes: "",
          transactionId: "savings4",
          updatedAt: "",
          accountId: "savings",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "40.00",
          balance: "2147.79",
          type: "Electronic",
          category: "Sport",
          notes: "",
          transactionId: "savings5",
          updatedAt: "",
          accountId: "savings",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "50.00",
          balance: "2187.79",
          type: "Electronic",
          category: "Food",
          notes: "",
          transactionId: "savings6",
          updatedAt: "",
          accountId: "savings",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "5.00",
          balance: "2082.79",
          type: "Electronic",
          category: "Sport",
          notes: "",
          transactionId: "credit-card1",
          updatedAt: "",
          accountId: "credit-card",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "10.00",
          balance: "2087.79",
          type: "Electronic",
          category: "Furnitures",
          notes: "Waiting for refund",
          transactionId: "credit-card2",
          updatedAt: "",
          accountId: "credit-card",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "20.00",
          balance: "2097.79",
          type: "Electronic",
          category: "Food",
          notes: "",
          transactionId: "credit-card3",
          updatedAt: "",
          accountId: "credit-card",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "30.00",
          balance: "2117.79",
          type: "Electronic",
          category: "Clothes",
          notes: "",
          transactionId: "credit-card4",
          updatedAt: "",
          accountId: "credit-card",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "40.00",
          balance: "2147.79",
          type: "Electronic",
          category: "Sport",
          notes: "",
          transactionId: "credit-card5",
          updatedAt: "",
          accountId: "credit-card",
        },
        {
          createdAt: "June 20th, 2020",
          description: "Golden Sun Bakery",
          amount: "50.00",
          balance: "2187.79",
          type: "Electronic",
          category: "Food",
          notes: "",
          transactionId: "credit-card6",
          updatedAt: "",
          accountId: "credit-card",
        },
      ],
    },
  }