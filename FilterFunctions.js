const users = [
    {
        name: 'John Doe',
        id: "us1",
        joined: "2015",
        email: "john@gmail.com",
        password: "john1122",
        country: "US",
        postalCode: "56339",
    },
    {
        name: 'Marry Jane',
        id: "jp1",
        joined: "2016",
        email: "jane@gmail.com",
        password: "jane1122",
        country: "Japan",
        postalCode: "43556",
    },
    {
        name: 'John Smith',
        id: "us2",
        joined: "2018",
        email: "johnsmith@gmail.com",
        password: "jSmith1122",
        country: "US",
        postalCode: "59830",
    },
    {
        name: 'Alice Bob',
        id: "us3",
        joined: "2015",
        email: "aliceBob@gmail.com",
        password: "aliceBob11",
        country: "US",
        postalCode: "56339",
    },
]


const transactions = [
    {
        transactionId: "XX232324265",
        userId: "us1",
        amount: 50000,
        currency: "USD",
        paymentMethod: "Credit Card",
        paymentType: "Funds",
        date: "2023-10-01T11:11:14.000Z"
    },
    {
        transactionId: "XX2542324265",
        userId: "us1",
        amount: 300000,
        currency: "USD",
        paymentMethod: "Mada Card",
        paymentType: "Shopping",
        date: "2022-8-01T11:11:14.000Z"
    },
    {
        transactionId: "XX2327624265",
        userId: "jp1",
        amount: 160000,
        currency: "EUR",
        paymentMethod: "Apple Pay",
        paymentType: "Other",
        date: "2023-10-01T11:11:14.000Z"
    },
    {
        transactionId: "XX236824265",
        userId: "us2",
        amount: 120000,
        currency: "USD",
        paymentMethod: "Credit Card",
        paymentType: "Funds",
        date: "2023-10-01T11:11:14.000Z"
    },
]
let userInput = 'John Doe';
const filterTransaction = (arr, transactions, inputValue) => {
    let length = arr.length;
    let length2 = transactions.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length2; j++) {
            if (arr[i].name === inputValue) {
                arr[i].id
                if (arr[i].id === transactions[j].userId) {
                    return transactions[j]
                }
                // else {
                //     alert("transaction not made")
                // }
            }
        }
    }
}
console.log(filterTransaction(users, transactions, userInput));
