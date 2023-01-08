const liGenerator = (e) => {
  const selInputText = document.querySelector("input");
  const selUl = document.querySelector("ul");
  const createLi = document.createElement("li");
  const createSpan = document.createElement("span");
  (createLi.classList += "newLi");
  createSpan.innerText = selInputText.value;
  createLi.appendChild(createSpan);
  const createButton = document.createElement("button");
  createButton.innerText = "Clear";
  selUl.appendChild(createLi);
  createLi.appendChild(createButton);
  createLi.onclick = taskComplete;
  createButton.onclick = removeLi;
};

const taskComplete = (event) => {
  event.currentTarget.classList += " complete";
};

const removeLi = (event) => {
  event.target.parentNode.remove();
};

const sortTask = (event) => {
    const selSortedTask = document.querySelector(".sortedTast");
    const selUnSortedTask = document.querySelector(".unsortedTast");
    selComplete = document.getElementsByClassName("newLi");
    let liArray = Array.from(selComplete)
    console.log(selComplete)
    console.log(liArray)
    liArray.forEach((element) => element.className.includes(" complete") ? selSortedTask.appendChild(element) : selUnSortedTask.appendChild(element));
}
