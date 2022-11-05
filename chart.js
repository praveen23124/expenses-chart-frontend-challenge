
function myFunction1(x) {
  x.classList.add("chartLines");
  const className = x.classList[1];
  console.log(className);
  if(className === "chartLine1")
  {
    document.getElementsByClassName("money1")[0].classList.remove("hideMoney");
  }
  else if (className === "chartLine2") {
    document.getElementsByClassName("money2")[0].classList.remove("hideMoney");
  }
  else if (className === "chartLine3") {
    document.getElementsByClassName("money3")[0].classList.remove("hideMoney");
  }
  else if (className === "chartLine4") {
    document.getElementsByClassName("money4")[0].classList.remove("hideMoney");
  }
  else if (className === "chartLine5") {
    document.getElementsByClassName("money5")[0].classList.remove("hideMoney");
  }
  else if (className === "chartLine6") {
    document.getElementsByClassName("money6")[0].classList.remove("hideMoney");
  }
  else if (className === "chartLine7") {
    document.getElementsByClassName("money7")[0].classList.remove("hideMoney");
  }
}
function myFunction2(y) {
  y.classList.remove("chartLines");
  const className = y.classList[1];
  if(className === "chartLine1")
  {
    document.getElementsByClassName("money1")[0].classList.add("hideMoney");
  }
  else if (className === "chartLine2") {
    document.getElementsByClassName("money2")[0].classList.add("hideMoney");
  }
  else if (className === "chartLine3") {
    document.getElementsByClassName("money3")[0].classList.add("hideMoney");
  }
  else if (className === "chartLine4") {
    document.getElementsByClassName("money4")[0].classList.add("hideMoney");
  }
  else if (className === "chartLine5") {
    document.getElementsByClassName("money5")[0].classList.add("hideMoney");
  }
  else if (className === "chartLine6") {
    document.getElementsByClassName("money6")[0].classList.add("hideMoney");
  }
  else if (className === "chartLine7") {
    document.getElementsByClassName("money7")[0].classList.add("hideMoney");
  }
}
