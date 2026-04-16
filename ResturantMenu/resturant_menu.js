const breakfastMenu = ['Pankakes','Eggs Benedict','Oatmeal','Frittata']
const mainCourseMenu = ['Stek','Pasta','Burger','Salmon']
const dessertMenu = ['Cake','Ice Cream','Pudding','Fruit Salad']

const breakfastMenuItemsHTML = breakfastMenu.map((item,index)=>`<p>Item ${index+1}:${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuItemsHTML;

let mainCourseItem='';
mainCourseMenu.forEach((item,index)=>{
    mainCourseItem+=`<p>Items ${index+1}:${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML=mainCourseItem;

    let dessertItem='';
    for (let i=0;i<dessertMenu.length;i++){
        dessertItem+=`<p>Item ${i+1}:${dessertMenu[i]}</p>`;}
        document.getElementById('dessertsMenuItems').innerHTML=dessertItem;