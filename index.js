const checkIfBirthday = () => {
  const today = new Date();
  const felixBirthday = new Date("June 5, 2002 03:24:00");

  console.log(felixBirthday.getDate());
  console.log(felixBirthday.getMonth());
  // alert("TODAY IS FELIX's BIRTHDAY!!!");

  if (
    today.getMonth() == felixBirthday.getMonth() &&
    today.getDate() == felixBirthday.getDate()
  ) {
    alert("TODAY IS FELIX's BIRTHDAY!!!");
  }
};

checkIfBirthday();
