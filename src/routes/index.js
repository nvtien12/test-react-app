import Home from '../component/pages/Home/Home';
import Following from '../component/pages/Followings';
import Accord from '../component/pages/Followings/Accord/Accord'
import Crv from '../component/pages/Followings/Crv/Crv';





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/following/accord', component: Accord},
    {path: '/following/crv', component: Crv},

 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}