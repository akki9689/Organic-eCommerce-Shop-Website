import danniel from '../../assets/common/customer/danniel.svg'

export const orderHistory = [

    {
        id: "1",
        orderId: "101",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "15 September, 2024",
        NoOfProducts: 3,
        status: "processing",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 335,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 84,
        orderedProduct: [

            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },
            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },

        ]
    },
    {
        id: "2",
        orderId: "102",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "1 September, 2024",
        NoOfProducts: 2,
        status: "on the way",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },

        ]
    },
    {
        id: "3",
        orderId: "103",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "19 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },

        ]
    },
    {
        id: "4",
        orderId: "104",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 2,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
          

        ]
    },
    {
        id: "5",
        orderId: "105",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "6",
        orderId: "106",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "7",
        orderId: "107",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "8",
        orderId: "108",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 2,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "9",
        orderId: "109",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 2,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "10",
        orderId: "110",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "11",
        orderId: "111",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "12",
        orderId: "112",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "13",
        orderId: "113",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "14",
        orderId: "114",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "15",
        orderId: "115",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "16",
        orderId: "116",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
    {
        id: "17",
        orderId: "117",
        customerImg:danniel,
        customerName: "Daniel Russell",
        date: "5 August, 2024",
        NoOfProducts: 3,
        status: "completed",
        billing: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        shipping: {
            address: "4140 Parker Rd. Allentown, New Mexico 31134",
            email: "dainnrussell@gmail.com",
            phone: "(671) 565-0110",
        },
        paymentMethod: "Paypal",
        subtotal: 201,
        discount: "20%",
        shippingCharge: "free",
        totalPrice: 101,
        orderedProduct: [

            {
                id: 'f2',
                name: 'Papaya',
                sku: '2SJ4256',
                price: 23,
                quantity: 1,
                images: [
                    {
                        main: 'https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg',
                        thumbnails: [
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-4_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg',
                            'https://www.bigbasket.com/media/uploads/p/l/40296057-5_1-fresho-papaya.jpg'
                        ]
                    }
                ],

            },
            {
                id: 'b4',
                name: 'Maaza',
                sku: '2SJ42789',
                price: 16,
                quantity: 3,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/61Byqlfo0vL._SL1500_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/61BpFrq5--L._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/71HcjePStzL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/81TfxmpWMtL._SL1500_.jpg',
                            'https://m.media-amazon.com/images/I/814FVJjLXTL._SL1500_.jpg'
                        ]
                    }
                ],

            },
            {
                id: 's5',
                name: 'Banana Chips',
                sku: '2SJ4243',
                price: 14,
                quantity: 2,
                images: [
                    {
                        main: 'https://m.media-amazon.com/images/I/71Z2h6w3drL._SY741_.jpg',
                        thumbnails: [
                            'https://m.media-amazon.com/images/I/71Q0ZKCdBtL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71gIFejwdYL._SX679_.jpg',
                            'https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg',
                            'https://tse4.mm.bing.net/th?id=OIP.OkDDBpIpCyy78_4ulJA5vwHaE7&pid=Api&P=0&h=180'
                        ]
                    }


                ]

            },

        ]
    },
]