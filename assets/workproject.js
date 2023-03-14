const worksection = document.getElementById('workingprojectid');
const minfolder = './assets/images/mobile/';
const maxfolder = './assets/images/desktop/';
const containerid = ['firstdiv', 'secondiv', 'thirdiv', 'fourthdiv'];
const projectitlename = [
  'Tonic',
  'Multi-Post Stories',
  'Facebook 360',
  'Uber Navigation',
];
const projectimgname = [
  'workimg1.svg',
  'workimg2.svg',
  'workimg3.svg',
  'workimg4.svg',
];
const technology = [
  { name: 'CANOPY', position: 'Back End', year: 2018 },
  { name: 'FACEBOOK', position: 'Full Stack Dev', year: 2018 },
  { name: 'FACEBOOK', position: 'Full Stack Dev', year: 2018 },
  { name: 'Uber', position: 'Lead Developer', year: 2023 },
];
const projectdescription = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo fuga quisquam si porro officiis cumque totam ipsum similique.Quasi dignissimos voluptas ex nostrum solutarepudiandae suscipit delectus aliquid labore?',
  'Lorem ipsum dolor sit amet consectetur adipisicing adipisicing elit. Officia quo fuga quisquam si porro officiis cumque totam ipsum similique.Quasi dignissimos voluptas voluptas ex nostrum solutarepudiandae suscipit delectus aliquid labore?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo fuga quisquam si porro officiis cumque totam ipsum similique.Quasi dignissimos voluptas ex nostrum solutarepudiandae suscipit delectus aliquid labore?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo fuga quisquam si porro officiis cumque totam ipsum similique.Quasi dignissimos voluptas ex nostrum solutarepudiandae suscipit delectus aliquid labore?',
];
const projectlang = [
  { name: 'Html', cname: 'lang-list' },
  { name: 'CSS', cname: 'lang-list' },
  { name: 'Ruby On Rails', cname: 'lang-list desknavbar-list' },
  { name: 'Javascript', cname: 'lang-list' },
];

const projdetails = [
  {
    cid: 'btnseeliveid btn-details list-details',
    name: 'See Live',
    address: '',
    path: './assets/images/seelive.svg',
  },
  {
    cid: 'btnseesourceid btn-details list-details',
    name: 'See Source',
    address: '',
    path: './assets/images/seesource.svg',
  },
];

function createlist(str, cname) {
  const list = document.createElement('li');
  list.className = cname;
  list.innerHTML = str;
  return list;
}
function createbutton(i) {
  const list = document.createElement('li');
  list.className = 'no-popup';
  const button = document.createElement('button');
  button.className = 'btn-details txt5 fw-5 fs-17 btnseeprojectid';
  button.value = containerid[i];
  button.textContent = 'See Project';
  list.append(button);
  return list;
}
function createdetails(i) {
  const unorderlist = document.createElement('ul');
  unorderlist.className = 'project-details';
  unorderlist.append(createbutton(i));
  projdetails.forEach((element) => {
    let text = `<a class='txt5 fw-5 fs-17 link-popup'>${element.name}</a>`;
    if (element?.path) {
      text = `${text}<img class='txt5 fw-5 fs-17 link-popup' src='${element.path}'>`;
    }
    unorderlist.append(createlist(text, element.cid));
  });
  return unorderlist;
}
function createlanguage() {
  const unorderlist = document.createElement('ul');
  unorderlist.className = 'project-language';
  projectlang.forEach((element) => {
    const text = `<a class='fw-5 fs-12 txt2 lang-link'>${element.name}</a>`;
    unorderlist.append(createlist(text, element.cname));
  });
  return unorderlist;
}
function createspan(word) {
  word = word.repeat(2);
  const span = document.createElement('span');
  if (word.length < 200) {
    span.textContent = word;
    return span;
  }
  const somestr = word.substring(0, 200);
  word = word.substring(200);
  span.innerHTML = `${somestr}<span class='desktop-only someword'>${word}</span>`;
  return span;
}

function createdescription(i) {
  const description = document.createElement('p');
  description.className = 'project-description';
  description.append(createspan(projectdescription[i]));
  return description;
}

function createtechnology(i) {
  const unorderlist = document.createElement('ul');
  unorderlist.className = 'project-techn';
  const dottext = '<div class="dot-icon"></div>';
  const list = [
    createlist(technology[i].name, 'fw-6 fs-13 txtd'),
    createlist(dottext + technology[i].position, 'fw-6 fs-13 techn-list'),
    createlist(dottext + technology[i].year, 'fw-6 fs-13 techn-list'),
  ];
  list.forEach((element) => unorderlist.append(element));
  return unorderlist;
}

function createprojectitle(i) {
  const unorderlist = document.createElement('ul');
  unorderlist.className = 'work-project';
  unorderlist.append(createlist(projectitlename[i], 'fswctitle'));
  unorderlist.append(createlist('&#215;', 'desktop-only projectcloseicon'));
  return unorderlist;
}

function getaltsource(i) {
  const altsrc = document.createElement('source');
  altsrc.setAttribute('media', '(min-width:768px)');
  altsrc.setAttribute('srcset', maxfolder + projectimgname[i]);
  return altsrc;
}

function createprojectimg(i) {
  const picture = document.createElement('picture');
  const altsrcset = getaltsource(i);
  picture.append(altsrcset);
  const img = document.createElement('img');
  img.className = 'work-img';
  img.setAttribute('alt', 'project Snipping Tool');
  img.setAttribute('src', minfolder + projectimgname[i]);
  picture.append(img);
  return picture;
}

function createimagediv(i) {
  const imgdiv = document.createElement('div');
  if (i % 2 === 0) imgdiv.className = 'project-img project-img1';
  else imgdiv.className = 'project-img project-img2';
  const imgcontent = createprojectimg(i);
  imgdiv.append(imgcontent);
  return imgdiv;
}
function createcontainer(i) {
  const workdiv = document.createElement('div');
  workdiv.className = 'working-container';
  const data = [
    createimagediv(i),
    createprojectitle(i),
    createtechnology(i),
    createdescription(i),
    createlanguage(i),
    createdetails(i),
  ];

  data.forEach((element) => {
    workdiv.append(element);
  });
  return workdiv;
}

function createsection(id_) {
  const containerdiv = document.createElement('div');
  containerdiv.className = 'section-workproject bg-white';
  containerdiv.id = id_;
  return containerdiv;
}

function createproject(id_, i) {
  const workprojectdiv = createsection(id_);
  workprojectdiv.append(createcontainer(i));
  return workprojectdiv;
}

containerid.forEach((item, i) => {
  worksection.append(createproject(item, i));
});
