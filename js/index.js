
const category = {
  juejinCatalogs: ['全部','后端','前端','Android','iOS','人工智能','开发工具','代码人生','阅读'],
  byteInternalCourses: ['全部','后端','前端','Android','iOS','代码人生']
};
const header1 = document.querySelector('.wrapper .header .header-left ul .juejin a');
const header2 = document.querySelector('.wrapper .header .header-left ul .vip a');
let is_vip = 0;
header1.addEventListener('click',function(){
  let headerSelected = document.querySelector('.header-active')
  headerSelected.classList.remove('header-active');
  header1.classList.add('header-active');
  getCategory();
  document.querySelector('.filter-active').classList.remove('filter-active');
  document.querySelector('.wrapper .filter .filter-left ul li a').classList.add('filter-active');
  if(document.querySelector('.top-active')){
    document.querySelector('.top-active').classList.remove('top-active');
}
  if(document.querySelector('.bottom-active')){
  document.querySelector('.bottom-active').classList.remove('bottom-active');
}
  const vipclicked = document.querySelector('.wrapper .filter .filter-right .checkbox-wrap label input');
  if(vipclicked.checked){
    vipclicked.checked = false;
  }
  is_vip = 0;
  getData(is_vip);
});
header2.addEventListener('click',function(){
  let headerSelected = document.querySelector('.header-active')
  headerSelected.classList.remove('header-active');
  header2.classList.add('header-active');
  getCategory();
  document.querySelector('.filter-active').classList.remove('filter-active');
  document.querySelector('.wrapper .filter .filter-left ul li a').classList.add('filter-active');
  if(document.querySelector('.top-active')){
    document.querySelector('.top-active').classList.remove('top-active');
}
  if(document.querySelector('.bottom-active')){
  document.querySelector('.bottom-active').classList.remove('bottom-active');
}
  const vipclicked = document.querySelector('.wrapper .filter .filter-right .checkbox-wrap label input');
  if(vipclicked.checked){
    vipclicked.checked = false;
  }
  is_vip = 0;
  getData(is_vip);
});


const catalog = document.querySelector('.wrapper .catalog ul');
catalog.addEventListener('click',function(e){
  // const catalogs = Array.from(document.querySelectorAll('.wrapper .catalog ul li a'));
  if(document.querySelector('.catalog-active') && e.target.tagName !== 'LI' && e.target.tagName !== 'UL'){
    document.querySelector('.catalog-active').classList.remove('catalog-active');
  }
  if(e.target.tagName === 'A'){
    e.target.classList.add('catalog-active');
  }
  else{
    
  }
  // e.target.classList.add('catalog-active');
  document.querySelector('.filter-active').classList.remove('filter-active');
  document.querySelector('.wrapper .filter .filter-left ul li a').classList.add('filter-active');
  if(document.querySelector('.top-active')){
    document.querySelector('.top-active').classList.remove('top-active');
}
  if(document.querySelector('.bottom-active')){
  document.querySelector('.bottom-active').classList.remove('bottom-active');
}
  const vipclicked = document.querySelector('.wrapper .filter .filter-right .checkbox-wrap label input');
  if(vipclicked.checked){
    vipclicked.checked = false;
  }
  is_vip = 0;
  getData(is_vip);
  // const clickedIndex = catalogs.indexOf(e.target);
  // console.log(`Clicked li index: ${clickedIndex}`);
})


const filter = document.querySelector('.wrapper .filter .filter-left ul');
filter.addEventListener('click',function(e){
  // console.log(e.target.tagName);
  if(document.querySelector('.filter-active') && e.target.tagName !== 'LI' && e.target.tagName !== 'UL'){
    document.querySelector('.filter-active').classList.remove('filter-active');
  }
  if(e.target.parentNode.tagName === 'A'){
    e.target.parentNode.classList.add('filter-active');
  }
  else if(e.target.parentNode.tagName === 'LI'){
  e.target.classList.add('filter-active');
  }
  else{
    
  }
  const filters = Array.from(document.querySelectorAll('.wrapper .filter .filter-left ul li a'));
  // console.log(filters);
  const clicked = document.querySelector('.filter-active');
  // console.log(clicked);
  const clickedIndex = filters.indexOf(clicked);
  // console.log(`Clicked li index: ${clickedIndex}`);
  if(clickedIndex === 3){
    if(document.querySelector('.top-active')){
      document.querySelector('.top-active').classList.remove('top-active');
      document.querySelector('.bottom-triangle').classList.add('bottom-active');
    }
    else if(document.querySelector('.bottom-active')){
      document.querySelector('.bottom-active').classList.remove('bottom-active');
      document.querySelector('.top-triangle').classList.add('top-active');
    }
    else{
    document.querySelector('.top-triangle').classList.add('top-active');
  }
  }
  else{
    if(document.querySelector('.top-active')){
      document.querySelector('.top-active').classList.remove('top-active');
  }
    if(document.querySelector('.bottom-active')){
    document.querySelector('.bottom-active').classList.remove('bottom-active');
  }
  }
  const vipclicked = document.querySelector('.wrapper .filter .filter-right .checkbox-wrap label input');
  if(vipclicked.checked){
    vipclicked.checked = false;
  }
  is_vip = 0;
  getData(is_vip);
})


const checkbox = document.querySelector('input');
checkbox.addEventListener('click',function(e){
  if (checkbox.checked) {
    is_vip = 1;
}
  else{
    is_vip = 0;
  }
  getData(is_vip);
})


function getCategory() {
    let list="";
    let array = []
    document.querySelector('.wrapper .catalog a').innerHTML = '';
    document.querySelector('.wrapper .catalog ul').innerHTML = list;
    const juejin = document.querySelector('.wrapper .header .header-left ul .juejin a');
    const vip = document.querySelector('.wrapper .header .header-left ul .vip a');
    // console.log(juejin)
    if(juejin.classList.contains('header-active')){
        array = category.juejinCatalogs;
    }else if(vip.classList.contains('header-active')){
        array = category.byteInternalCourses;
    }
    else{
        array = [];
    }
    // const grandpa = document.querySelector('.wrapper .catalog ul')
    for (let i=0; i<array.length; i++){
        list +="<li><a href=\"javascript:;\">"+array[i]+"</a></li>";
    }
    document.querySelector('.wrapper .catalog a').innerHTML = '分类：';
    document.querySelector('.wrapper .catalog ul').innerHTML = list;
    document.querySelector('.wrapper .catalog ul li a').classList.add('catalog-active');
}


function listCategory(res,headerselected) {
    const filterclear = document.querySelector('.filter');
    const levelArray= ["https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a02c571ff5e24b90b0c7aa70c58ebd1c~tplv-k3u1fbpfcp-watermark.image",
    "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53901be7d27e4abe94530e12d815491d~tplv-k3u1fbpfcp-watermark.image",
    "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/922e26916a444513bceddad5bcf437e1~tplv-k3u1fbpfcp-watermark.image",
    "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f4453379f1d416ca00c3619e796d330~tplv-k3u1fbpfcp-watermark.image",
    "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8584543d8535435a9d74c1fbf7901ac7~tplv-k3u1fbpfcp-watermark.image",
    "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1f4af1eaec64ce78675ad13fcd71be1~tplv-k3u1fbpfcp-watermark.image",
    "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a070131b0b34e729a1c6b0cdcda2dc7~tplv-k3u1fbpfcp-watermark.image",
    "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/271b5a9cf1e84447b6518cd7bb6b0e07~tplv-k3u1fbpfcp-watermark.image"]
    if(res.length === 0){
      document.querySelector('.wrapper .content').innerHTML = '<div class=\"common-empty\"><div class=\"img-empty-wrap\"><div class=\"img-empty\" style=\"\"></div></div> <div class=\"content-slot-wrap\"></div> <div class=\"description\">该分类下暂无小册</div></div>';
    }
    else{
      // console.log(headerselected);
      let list="";
      const content = document.querySelector('.wrapper .content');
      content.innerHTML = '';
      if(headerselected === 0){
      if(filterclear.classList.contains('remove')){
        filterclear.classList.remove('remove')
      }
      for (let i=0; i< res.length; i++){
        let cover_img = JSON.stringify(res[i].base_info.cover_img);
        let alttitle = JSON.stringify("「" + res[i].base_info.title +"」" + "封面");
        let title = JSON.stringify(res[i].base_info.title);
        let summary = JSON.stringify(res[i].base_info.summary);
        let avatar_img = JSON.stringify(res[i].user_info.avatar_large);
        let company = "";
        if(res[i].user_info.company){
          company = " @" + res[i].user_info.company;
        }
        else{
          company = "";
        }
        let newContent = "";
        if(res[i].is_new){
          newContent = "<span class=\"tag\">新品</span>";
        }
        else newContent = "";
        let level = res[i].user_info.level;
        let newLevel = "";
        if(level != 0){
          newLevel = "<img src=" + JSON.stringify(levelArray[level-1]) + "alt=\"创作等级LV." + level + "\" title=\"创作等级LV." + level + "\" class=\"vip-level\" loading=\"lazy\">";
          // console.log("newlevel:"+newLevel);
        } 
        // console.log(alttitle); 
        list += "<div class=\"book-card-item\"><a href=\"javascript:;\" class=\"book-poster\"><img src=" + cover_img + "alt=" + alttitle + "class=\"lazy book-thumb-img\" loading=\"lazy\" style=\"\"></a><div class=\"message\"><div class=\"title\">" + newContent + "<span title=" + title + "class=\"text-highlight\">" + res[i].base_info.title + "</span></div><span title=" + summary + "class=\"desc\">" + res[i].base_info.summary + "</span><div class=\"author\"><div href=\"javascript:;\" class=\"author-left\"><a class=\"avatar\"><img src=" + avatar_img + "alt=\"undefined的头像\" class=\"lazy avatar-img\" loading=\"lazy\"></a><a href=\"javascript:;\" target=\"_blank\" rel=\"\" class=\"author-name\"><span class=\"name\" style=\"max-width: 128px;\">" + res[i].user_info.user_name + "</span>" + newLevel + "</a></div><div class=\"author-desc\"><span class=\"self-description\">" + res[i].user_info.job_title + company + "</span></div></div><div class=\"other\"><a href=\"javascript:;\" target=\"_blank\" rel=\"\" class=\"jj-link\"></a><div class=\"price\"><span class=\"price-unit\">¥</span>" + (res[i].max_discount.discount_money / 100).toFixed(2) + "<span class=\"origin-price\">¥" + (res[i].max_discount.price / 100).toFixed(2) + "</span></div><div class=\"messages\"><span>已完结 "+ res[i].base_info.section_count + " 小节</span><span class=\"message\"><span>" + res[i].base_info.buy_count + " </span><span>人已购买</span></span></div></div><div class=\"sale-tooltip-wrap\"><div class=\"sale-tooltip\">首单券后价</div></div></div></div>";
      }
      }
      if(headerselected === 1){
        if(!filterclear.classList.contains('remove')){
          filterclear.classList.add('remove')
        }
      
      for(let i=0; i<res.length; i++){
        let cover_img = JSON.stringify(res[i].content.cover_image.url);
        let alttitle = JSON.stringify("「" + res[i].content.name +"」" + "封面");
        let hour = Math.floor((res[i].content.extra.course_package.duration) / 3600000);
        let minute = Math.ceil(((res[i].content.extra.course_package.duration) / 3600000 - hour) * 60);
        list += "<div class=\"byte-video-item video-item\"><div class=\"poster\"><img src=" + cover_img + "alt=" + alttitle + "class=\"lazy video-thumb\" loading=\"lazy\" style=\"\"></div> <div class=\"info\"><div class=\"info-top\"><div class=\"title-box\"><span class=\"vip-free-tag tag\" style=\"width: 55px; height: 20px; line-height: 20px;\">VIP免费</span>" + res[i].content.name + "</div><div class=\"desc\">" + res[i].content.abstract + "</div><div class=\"source-wrap\"><img src=\"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/icon-bytetech.6c483d2.png\" class=\"icon-bytetech\">ByteTech</div><div class=\"video-count-duration-wrap video-duration-wrap\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"video-icon\"><path d=\"M4.32253 13.2286V13.2286C3.62016 13.2286 3.05078 12.6593 3.05078 11.9569V5.05469C3.05078 3.95012 3.94621 3.05469 5.05078 3.05469H11.953C12.6554 3.05469 13.2247 3.62407 13.2247 4.32643V4.32643\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path><rect x=\"6.25039\" y=\"6.24844\" width=\"10.7275\" height=\"10.7275\" rx=\"1.6\" stroke-width=\"1.2\"></rect><path d=\"M13.7117 11.2915L10.778 9.49607C10.5212 9.33889 10.1914 9.52371 10.1914 9.8248L10.1914 13.4158C10.1914 13.7168 10.5212 13.9017 10.778 13.7445L13.7117 11.949C13.9574 11.7987 13.9574 11.4419 13.7117 11.2915Z\"></path></svg>" + res[i].content.extra.course_package.chapter_count + "个视频 · " + hour + "小时" + minute + "分钟</div></div></div><div class=\"footer\"><div class=\"source-wrap\"><img src=\"//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/icon-bytetech.6c483d2.png\" class=\"icon-bytetech\">ByteTech</div></div></div>";
      }
      }
      document.querySelector('.wrapper .content').innerHTML = list;
    }
}



const catagoryId = ["0", "6809637769959178254", "6809637767543259144", "6809635626879549454", "6809635626661445640", "6809637773935378440", "6809637771511070734", "6809637776263217160", "6809637772874219534"]
const catagory_Id = [0,"6809637769959178254","6809637767543259144","6809635626879549454","6809635626661445640","6809637776263217160"]
const sortId = [10,1,7,9,8]


function getData(is_vip) {
  const filters = Array.from(document.querySelectorAll('.wrapper .filter .filter-left ul li a'));
  // console.log(filters);
  const clicked = document.querySelector('.filter-active');
  // console.log(clicked);
  const clickedIndex = filters.indexOf(clicked);
  const headers = Array.from(document.querySelectorAll('.wrapper .header .header-left ul li a'));
  const catalogs = Array.from(document.querySelectorAll('.wrapper .catalog ul li a'));
  let headerselected = document.querySelector('.header-active');
  let catalogselected = document.querySelector('.catalog-active');
  let key = catalogs.indexOf(catalogselected);
  let key1 = clickedIndex
  if(document.querySelector('.bottom-active')){
    key1 = 4;
}
  // console.log('key:'+key);
  if(headers.indexOf(headerselected) === 0){
    const bodyContent = {"category_id":"0","cursor":"0","sort":10,"is_vip":0,"limit":20}; 
    bodyContent.category_id = catagoryId[key];
    bodyContent.sort = sortId[key1];
    bodyContent.is_vip = is_vip;
    axios.post(
      "https://api.juejin.cn/booklet_api/v1/booklet/listbycategory",bodyContent,
      {params: {
          aid: 2608,
          uuid: '7302255655028966923',
        spider: 0
      }}
    ) 
  .then(response => {
    listCategory(response.data.data,headers.indexOf(headerselected));
  }) 
  .catch(error => {
    console.error(error);
  });
  }
  if(headers.indexOf(headerselected) === 1){
    let catagory_id = catagory_Id[key];
    axios.get("https://api.juejin.cn/booklet_api/v1/bytecourse/list_by_category?category_id=" + catagory_id + "&cursor=0&page_size=20&aid=2608&uuid=7302255655028966923&spider=0")
        .then(response => {
          listCategory(response.data.data,headers.indexOf(headerselected));
        }) 
        .catch(error => {
            console.error(error);
        });
  }
  

}
getCategory();
getData(is_vip);