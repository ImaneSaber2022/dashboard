export const menu = [
  {
    id: 1,
    title: "main",
    ListItems: [
      {
        id: 1,
        title: "HomePage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    ListItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    ListItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    ListItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
     
    ],
  },
  {
    id: 5,
    title: "analytics",
    ListItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
     
    ],
  },
  
];
export const topDealUsers = [
  {
    id:1,
    img:"https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600",
    username:"fati",
    email:"fati@gmail.com",
    amount:"3.668",

  },
  {
    id:2,
    img:"https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=600",
    username:"wiam",
    email:"wiami@gmail.com",
    amount:"4.668",

  },
  {
    id:3,
    img:"https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600",
    username:"ilyas",
    email:"ilyas@gmail.com",
    amount:"5.668",

  },
  {
    id:4,
    img:"https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600",
    username:"badr",
    email:"badr@gmail.com",
    amount:"6.668",

  },
  {
    id:5,
    img:"https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=600",
    username:"imane",
    email:"imane@gmail.com",
    amount:"7.668",

  },
  {
    id:6,
    img:"https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600",
    username:"sara",
    email:"sara@gmail.com",
    amount:"8.668",

  },
  {
    id:7,
    img:"https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600",
    username:"simo",
    email:"simo@gmail.com",
    amount:"9.668",

  },

]

export const chartBoxUser = {
  color:"#8884d8",
  icon: "/userIcon.svg",
  title:"Total Users",
  dataKey:"users",
  number:"$11.238",
  percentage: 45,
  chartData:[
    {name:"Sun",users:400},
    {name:"Mon",users:600},
    {name:"Tue",users:500},
    {name:"Wed",users:700},
    {name:"Thu",users:400},
    {name:"Fri",users:500},
    {name:"Sat",users:450},
  ],

};

export const chartBoxConversation = {
  color:"gold",
  icon: "/conversionIcon.svg",
  title:"Total Ratio",
  dataKey:"ratio",
  number:"$2.6",
  percentage: 12,
  chartData:[
    {name:"Sun",ratio:400},
    {name:"Mon",ratio:600},
    {name:"Tue",ratio:500},
    {name:"Wed",ratio:700},
    {name:"Thu",ratio:400},
    {name:"Fri",ratio:500},
    {name:"Sat",ratio:450},
  ],

};

export const chartBoxProduct = {
  color:"skyblue",
  icon: "/productIcon.svg",
  title:"Total Products",
  dataKey:"products",
  number:"$238",
  percentage: 21,
  chartData:[
    {name:"Sun",products:400},
    {name:"Mon",products:600},
    {name:"Tue",products:500},
    {name:"Wed",products:700},
    {name:"Thu",products:400},
    {name:"Fri",products:500},
    {name:"Sat",products:450},
  ],

};



export const chartBoxRevenue = {
  color:"teal",
  icon: "/revenueIcon.svg",
  title:"Total Revenue",
  dataKey:"revenue",
  number:"$56.432",
  percentage: -12,
  chartData:[
    {name:"Sun",revenue:400},
    {name:"Mon",revenue:600},
    {name:"Tue",revenue:500},
    {name:"Wed",revenue:700},
    {name:"Thu",revenue:400},
    {name:"Fri",revenue:500},
    {name:"Sat",revenue:450},
  ],

};
export const barChartBoxVisit  = {
  title:"Total Visit",
  color:"#FF8042",
  dataKey:"visit",
  chartData: [
    {
      name:"Sun",
      visit:4000,
    },
    {
      name:"Mon",
      visit:3000,
    },
    {
      name:"Tue",
      visit:5000,
    },
    {
      name:"Wed",
      visit:4000,
    },
    {
      name:"Thu",
      visit:6000,
    },
    {
      name:"Fri",
      visit:4000,
    },
    {
      name:"Sat",
      visit:2000,
    },
  ]
}
export const barChartBoxRevenue = {
  title:"Profil Earned",
  color:"#8884d8",
  dataKey:"profil",
  chartData: [
    {
      name:"Sun",
      profil:4000,
    },
    {
      name:"Mon",
      profil:3000,
    },
    {
      name:"Tue",
      profil:5000,
    },
    {
      name:"Wed",
      profil:4000,
    },
    {
      name:"Thu",
      profil:6000,
    },
    {
      name:"Fri",
      profil:4000,
    },
    {
      name:"Sat",
      profil:2000,
    },
  ]
}

export const userRows = [
  {
    id:1,
    img:"https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"imane",
    firstName:"saber",
    email:"imane@gmail.com",
    phone:"0645576588",
    createdAt:"01.02.2023",
    verified:true,

  },
  {
    id:2,
    img:"https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"wiam",
    firstName:"krirou",
    email:"wiam@gmail.com",
    phone:"06455456588",
    createdAt:"12.02.2022",
    verified:true,

  },
  {
    id:3,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"badr",
    firstName:"fakhir",
    email:"badr@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2021",
    verified:true,

  },
  {
    id:4,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    verified:true,

  },
  {
    id:5,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    verified:true,

  },
  {
    id:6,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    verified:true,

  },
  {
    id:7,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    verified:true,

  },
  {
    id:8,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    

  },
  {
    id:9,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    

  },
  {
    id:10,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    verified:true,

  },
  {
    id:11,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
    

  },
  {
    id:12,
    img:"https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName:"ilyas",
    firstName:"ehoooo",
    email:"ilyas@gmail.com",
    phone:"0656756588",
    createdAt:"10.02.2020",
  

  },
]

export const products = [
  {
    id:1,
    img:"https://tse4.mm.bing.net/th?id=OIP.TUq7Z7NWXVVwiz0iNLKd7QHaHa&pid=Api&P=0&h=180",
    title:"Playstation 5 digital Edition",
    color:"white",
    producer:"Sony",
    price:"$250.99",
    createdAt:"01.02.2023",
    inStock:true,
  },
  {
    id:2,
    img:"https://tse2.mm.bing.net/th?id=OIP.PXLMRYD0xXhzwsQ38uD7dQHaFU&pid=Api&P=0&h=180",
    title:"Dell Laptop KR211822",
    color:"black",
    producer:"Dell",
    price:"$450.99",
    createdAt:"01.02.2023",
    inStock:true,
  },
  {
    id:3,
    img:"https://tse4.mm.bing.net/th?id=OIP.e3TQzdUhlDmlQC8B-LqHPQHaGk&pid=Api&P=0&h=180",
    title:"Souris",
    color:"black",
    producer:"Souris",
    price:"$50.99",
    createdAt:"01.02.2023",
    inStock:true,
  },
  {
    id:4,
    img:"https://tse2.mm.bing.net/th?id=OIP.5wsHMECs-Ai5l3sZkmMUwAHaHa&pid=Api&P=0&h=180",
    title:"unité centrale",
    color:"black",
    producer:"Unité Centrale",
    price:"$350.99",
    createdAt:"01.02.2023",
    inStock:true,
  },
  {
    id:5,
    img:"https://tse2.mm.bing.net/th?id=OIP.BlGDrS1sVBqAh4bPuKlbDgHaEB&pid=Api&P=0&h=180",
    title:"ecran",
    color:"black",
    producer:"Ecran",
    price:"$450.99",
    createdAt:"01.02.2023",
    inStock:true,
  },
  {
    id:6,
    img:"https://tse2.mm.bing.net/th?id=OIP.PXLMRYD0xXhzwsQ38uD7dQHaFU&pid=Api&P=0&h=180",
    title:"Dell Laptop KR211822",
    color:"black",
    producer:"Dell",
    price:"$450.99",
    createdAt:"01.02.2023",
    inStock:true,
  },
  


]
export const singleUser = [
  {
    id:1,
    title:"Saber Imane",
    img:"https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=600",
    info:{
      username:"Imane20",
      fullname:"Saber Imane",
      email:"saberimane70@gmail.com",
      phone:"123 456 789",
      status:"verified",
    
    },
    chart:{
      dataKey:[
        {name:"visits",color:"#82ca9d"},
        {name:"orders",color:"#8884d8"},
      ],
      data:[
        {
          name:"Sun",
          visits:4000,
          orders:2400,
        },
        {
          name:"tue",
          visits:3000,
          orders:1398,
        },
        {
          name:"wen",
          visits:2780,
          orders:3908,
        },
        {
          name:"thu",
          visits:1890,
          orders:4800,
        },
        {
          name:"fry",
          visits:4000,
          orders:2400,
        },
        {
          name:"sat",
          visits:3490,
          orders:4300,
        },


      ],
    },
    activities:[
      {
        text:"imane saber purchased Playstation 5 digital Editions",
        time:"3 day ago",
      },
      {
        text:"imane saber added Playstation 5 digital Editions",
        time:"1 week ago",
      },
      {
        text:" mike imane  purchased Playstation 5 digital Editions",
        time:"2 weeks ago",
      },
      {
        text:"Ana reviewed the product",
        time:"1 month ago",
      },
      {
        text:"Michael added  Playstation 5 digital Editions",
        time:"1 month ago",
      },
      {
        text:"Helen reviewed the product",
        time:"2 month ago",
      },
    ]
  }
]

export const singleProduct = [
  {
    id:1,
    title:"Playstation 5 Digital Edition",
    img:"https://tse4.mm.bing.net/th?id=OIP.fXxOh0xrlvgleRSNcIApSwHaHa&pid=Api&P=0&h=180",
    info:{
      productId:"Ps55DF1156d",
      color:"white",
      price:"$250.99",
      producer:"Sony",
      export:"Japan",
    
    },
    chart:{
      dataKey:[
        {name:"visits",color:"#82ca9d"},
        {name:"orders",color:"#8884d8"},
      ],
      data:[
        {
          name:"Sun",
          visits:4000,
          orders:2400,
        },
        {
          name:"tue",
          visits:3000,
          orders:1398,
        },
        {
          name:"wen",
          visits:2780,
          orders:3908,
        },
        {
          name:"thu",
          visits:1890,
          orders:4800,
        },
        {
          name:"fry",
          visits:4000,
          orders:2400,
        },
        {
          name:"sat",
          visits:3490,
          orders:4300,
        },


      ],
    },
    activities:[
      {
        text:"imane saber purchased Playstation 5 digital Editions",
        time:"3 day ago",
      },
      {
        text:"imane saber added Playstation 5 digital Editions",
        time:"1 week ago",
      },
      {
        text:" mike imane  purchased Playstation 5 digital Editions",
        time:"2 weeks ago",
      },
      {
        text:"Ana reviewed the product",
        time:"1 month ago",
      },
      {
        text:"Michael added  Playstation 5 digital Editions",
        time:"1 month ago",
      },
      {
        text:"Helen reviewed the product",
        time:"2 month ago",
      },
    ]
  }
]





















