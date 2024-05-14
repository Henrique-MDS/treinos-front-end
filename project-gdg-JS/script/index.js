const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
];
const images = document.getElementById("images");
const menuBtn = document.getElementById("menu");
const memberTitleH1 = document.getElementById("memberName");
const navigation = document.getElementById("navigation");
let activeMember = 0;


function navigationMember(direction) {
  changeMember(activeMember + direction);
};

function changeMenu() {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
};

function setMember(memberID) {
  changeMember(memberID)
  changeMenu();
};

function changeMember(memberid) {
  activeMember = memberid;

  if(activeMember < 0) {
    activeMember = 5;
  } else if (activeMember > 5) {
    activeMember = 0;
  }

  const member = members[activeMember];
  images.style.transform = `translateY(-${100 * activeMember}vh)`;
  memberTitleH1.classList = member.id;

  changeName(member.name);
};
