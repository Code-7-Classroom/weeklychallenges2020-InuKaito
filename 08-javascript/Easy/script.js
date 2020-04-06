function exercise(exerciseType) {
    return () => {
      return "Today's exercise: " + exerciseType;
    };
  }
  
  var run = exercise("running");
  console.log(run());
  // exercise()
  var swim = exercise("swimming");
  console.log(swim());