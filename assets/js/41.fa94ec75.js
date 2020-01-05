(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{254:function(t,a,s){"use strict";s.r(a);var r=s(0),R=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"了解核心機制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解核心機制"}},[t._v("#")]),t._v(" 了解核心機制")]),t._v(" "),s("h2",{attrs:{id:"csur-的核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csur-的核心概念"}},[t._v("#")]),t._v(" CSUR 的核心概念")]),t._v(" "),s("h4",{attrs:{id:"原版遊戲：按路修建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原版遊戲：按路修建"}},[t._v("#")]),t._v(" 原版遊戲：按路修建")]),t._v(" "),s("p",[t._v("在都市天際線原版遊戲中，都市路網的修建是以“路”為組織的。這意味著你在建造都市時使用的每個道路組件都代表“一整條路”。我們來看下面的簡單例子。在下圖中，一條4線道的高速路分叉為兩條2線道的高速路。由於原版的道路組件以路為單位，這個匝道的左分叉和右分叉都是2線道高速路，所以這兩個分叉接出的路完全相同。也就是說，原版遊戲對於一個匝道是無法區分左分叉和右分叉的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/09/23/mqGi2fxdXMKYZEp.jpg",alt:"fig1"}})]),t._v(" "),s("p",[t._v("都市天際線原版遊戲按路修建的體系囙此也帶來了一些明顯的問題，使得修建非常逼真的道路設施需要花費大量的額外人工。遊戲無法區分一個匝道的左右叉，這意味著遊戲也不能自動作出匝道分叉所對應的道路標線。比如4線道分出1線道可以有左出口和右出口兩組，然而遊戲無法分辨是左出口還是右出口，自然也不能畫出標線。另外一個例子是同一條路上車道數量的增减。現實世界中，一條3線道的路拓寬到4車道，往往會從最左邊或者最右邊新增一個車道，同時3線道的路和4線道的路對應地根據右側或者左側對齊。而在原版遊戲裏，如果直接連接一條3線道和4線道的路，這兩條路是居中對齊的。所以在原版的道路系統下，我們往往需要仔細地用Move it調整道路分支的位置和對齊，再手動畫上每個接口的標線，才能得到非常真實的效果。這也是大部分都市天際線的造景玩家修路的主要方法。")]),t._v(" "),s("h4",{attrs:{id:"csur：按道修建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csur：按道修建"}},[t._v("#")]),t._v(" CSUR：按道修建")]),t._v(" "),s("p",[t._v("和原版遊戲的道路體系（包括工坊上的絕大部分道路資產）相比，CSUR採用一種完全不同的修路理念：按道修建。這意味著CSUR中每個道路組件代表的不是一整條路，而是一條路中的一組或者多組行車道。我們來看和原版高速相對應的例子。在下圖中，一條CSUR的4車道高架路分為兩條2車道的道路。由於CSUR的道路組件以車道為組織，由第1--4道組成的4車道道路會分叉成位於1--2車道的左分支和位於3（.5）--4（.5）車道（半個車道的寬度用於容納道路護欄）的右分支。左右分支的兩組車道位置不同，它們也就對應於兩個不同的CSUR組件（2R和2R4P）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/09/23/Zc82eyiTzAq7Eo9.jpg",alt:"fig1"}})]),t._v(" "),s("p",[t._v("因此，CSUR的每個介面組件確定了每條車道發生什麼變化（如增减、分叉等），自然也就能預先畫好標線，同時一步到位修出完美平滑的道路介面。和原版道路體系相比，CSUR無疑需要花一些時間來學習，然而對於追求精細景觀的玩家來說，使用CSUR能够省去大量手動擺放標線的時間，同時也使得存到更難達到遊戲的prop上限。")]),t._v(" "),s("h2",{attrs:{id:"csur-模塊和命名概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csur-模塊和命名概要"}},[t._v("#")]),t._v(" CSUR 模塊和命名概要")]),t._v(" "),s("p",[t._v("由於上文提到的按道修建的概念，CSUR包含數量極其龐大的道路組件。比如在寬度不超過6線道的情况下1線道的組件就可以有6種。再加上各種可能出現的介面模組，我們在工坊發佈的CSUR道路合集的資產總數多達近400個。為了迅速生產大量的道路模塊，我們開發了一套基於Blender的道路建模軟件，以及在遊戲資產編輯器使用的道路自動導入MOD。如果你發現工坊發佈的道路包裏沒有你所需要的模塊，或者你想自己定制一套CSUR道路包，你只需下載CSUR建模軟件和道路導入MOD，不需要任何3D建模或資產製作的技能，就可以在幾分鐘之內製作你所需要的定制道路。")]),t._v(" "),s("p",[t._v("CSUR的組件命名是高度規律的，組件的名稱可以唯一確定它所對應的道路連接方式。這也使得根據需求蒐索要用的CSUR模塊變得十分簡單。我們從CSUR對每條車道的位置編號開始，逐步介紹各種模塊的命名管道。")]),t._v(" "),s("h4",{attrs:{id:"車道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#車道"}},[t._v("#")]),t._v(" 車道")]),t._v(" "),s("p",[t._v("CSUR對車道標號的規律非常簡單。從道路中心線開始，正好沿中心線居中對齊的車道為第0道，類比坐標系中的原點。緊貼著第0道右側的車道就是第1道，再右側就是第2道，依此類推。\n"),s("img",{attrs:{src:"https://i.loli.net/2019/09/23/mwdjRVPKrDnsZzi.png",alt:"fig1"}})]),t._v(" "),s("p",[t._v("同時我們也會使用編號帶有0.5的車道。比如左邊緣貼著道路中心線的一條車道，相對第0道向右偏移了半條車道，所以就是+0.5道。帶有小數點的名稱容易造成程式混淆，CSUR中“.5”用P來表示，即挨著中心線右邊的車道是0P，向右為1P，2P，依此類推。\n"),s("img",{attrs:{src:"https://i.loli.net/2019/09/23/Ksjow7xtdMLrIlU.png",alt:"fig1"}})]),t._v(" "),s("h4",{attrs:{id:"車道組"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#車道組"}},[t._v("#")]),t._v(" 車道組")]),t._v(" "),s("p",[t._v("一條或多條連續位置的車道並排在一起，就形成了一組車道（block），或者叫一條行車線（carriageway）。每組車道根據它的位置（左，中，右）和車道數量命名。比如4條車道構成一組，如果這4條車道相對道路中心線居中（即-1.5，-0.5，0.5，1.5），則稱為4C。如果相對中心線向右偏移，那麼用最右邊的車道編號來命名這一組車道，若最右道是第5道則為4R5。反之，如果相對中心線向左偏移，就以最左邊的車道標號，如4L5。現時的CSUR模塊都是靠右行駛的，所以暫時沒有左偏移的組件。根據這個規律，我們很容易就能從每組車道的編號知道它的位置。比如3R4就是3條車道向右至第4道。特別地，如果一組車道從第1條車道開始，它的編號就會省略R（L）之後的數字，比如2R2簡寫為2R，3R3簡寫為3R。\n"),s("img",{attrs:{src:"https://i.loli.net/2019/09/23/1LnyGpW29fj6ASs.jpg",alt:"fig1"}})]),t._v(" "),s("h4",{attrs:{id:"模塊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模塊"}},[t._v("#")]),t._v(" 模塊")]),t._v(" "),s("p",[t._v("一個CSUR模塊由沿著行車方向首尾兩端連接的車道組構成。CSUR的道路模塊分為4種：\n1.基本（base）模塊：兩端為完全相同的一組或多組車道。如4R，6DR4。\n2.平移（shift）模塊：改變一組車道在路中的相對位置，即向左或者向右移動。如3R=3R4。\n3.過渡（transition）模塊：新增或减少一組車道中的車道數。如3R=4R。\n4.匝道（ramp）模塊：多組車道在首尾之間分流或合流。如4R=2R2R4P，3R3R6P=2R2R4P2R7")]),t._v(" "),s("p",[t._v("後三種模塊也統稱介面（interface）模塊。CSUR的模塊邏輯能保證任意連接首尾的車道組，得到的模塊總屬於這4種之一。模塊的命名管道為（首端車道組）=（尾端車道組）。由於基本模塊首尾一樣，省略等號和之後的部分。根據模塊的命名，我們也很容易知道它連接的是哪些車道。比如3R3R6P=2R2R4P2R7是一個兩組車道3R和3R6P分成三組車道2R、2R4P和2R7的匝道模塊。")]),t._v(" "),s("p",[t._v("上文描述了單向模塊的命名。雙向模塊的命名分對稱和不對稱兩種情况。如果直接把一個模塊雙向對稱處理，它的名稱就是原來單向模塊的車道數後加上“D”，並把車道數乘以2。比如兩條3R成為6DR，兩條5R6成為10DR6。如果模塊恰好挨著道路中心線（如1R0P，2R1P），對應的雙向道路就不會有中央分隔帶，相當於在居中的一組車道中間畫了一條雙黃線。比如2R1P對應的雙向模塊相當於畫了黃線的4C，囙此稱為4DC。如果雙向模塊不對稱，那麼直接用（左側模塊）--（右側模塊）命名，如3R4--4R，2R3--4R3。")]),t._v(" "),s("h2",{attrs:{id:"使用-csur-道路資產"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-csur-道路資產"}},[t._v("#")]),t._v(" 使用 CSUR 道路資產")]),t._v(" "),s("p",[t._v("每個CSUR資產的縮略圖和文字描述裏都指出了它的功能。同一個模塊可能存在多個資產，分別對應不同的樣式和使用場景（如有無自行車道）。")])])}),[],!1,null,null,null);a.default=R.exports}}]);