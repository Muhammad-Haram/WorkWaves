  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  ],



  app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());