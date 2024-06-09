const comments = [
  {
    userImage: "https://example.com/user1.jpg",
    message: "This is the first comment",
    userName: "User1",
    replies: [
      {
        userImage: "https://example.com/user2.jpg",
        message: "This is a reply to the first comment",
        userName: "User2",
        replies: [
          {
            userImage: "https://example.com/user3.jpg",
            message: "This is a nested reply",
            userName: "User3",
            replies: [],
          },
        ],
      },
      {
        userImage: "https://example.com/user4.jpg",
        message: "Another reply to the first comment",
        userName: "User4",
        replies: [],
      },
    ],
  },
  {
    userImage: "https://example.com/user5.jpg",
    message: "This is the second comment",
    userName: "User5",
    replies: [
      {
        userImage: "https://example.com/user6.jpg",
        message: "This is a reply to the second comment",
        userName: "User6",
        replies: [],
      },
    ],
  },
  {
    userImage: "https://example.com/user7.jpg",
    message: "This is the third comment",
    userName: "User7",
    replies: [],
  },
  {
    userImage: "https://example.com/user8.jpg",
    message: "This is the fourth comment",
    userName: "User8",
    replies: [
      {
        userImage: "https://example.com/user9.jpg",
        message: "This is a reply to the fourth comment",
        userName: "User9",
        replies: [
          {
            userImage: "https://example.com/user10.jpg",
            message: "Nested reply to the fourth comment",
            userName: "User10",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    userImage: "https://example.com/user11.jpg",
    message: "This is the fifth comment",
    userName: "User11",
    replies: [],
  },
  {
    userImage: "https://example.com/user12.jpg",
    message: "This is the sixth comment",
    userName: "User12",
    replies: [],
  },
  {
    userImage: "https://example.com/user13.jpg",
    message: "This is the seventh comment",
    userName: "User13",
    replies: [
      {
        userImage: "https://example.com/user14.jpg",
        message: "Reply to the seventh comment",
        userName: "User14",
        replies: [],
      },
      {
        userImage: "https://example.com/user15.jpg",
        message: "Another reply to the seventh comment",
        userName: "User15",
        replies: [
          {
            userImage: "https://example.com/user16.jpg",
            message: "Nested reply to another reply",
            userName: "User16",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    userImage: "https://example.com/user17.jpg",
    message: "This is the eighth comment",
    userName: "User17",
    replies: [],
  },
  {
    userImage: "https://example.com/user18.jpg",
    message: "This is the ninth comment",
    userName: "User18",
    replies: [
      {
        userImage: "https://example.com/user19.jpg",
        message: "Reply to the ninth comment",
        userName: "User19",
        replies: [],
      },
    ],
  },
  {
    userImage: "https://example.com/user20.jpg",
    message: "This is the tenth comment",
    userName: "User20",
    replies: [],
  },
];

export default comments;
