"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[592],{8592:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var i=s(8683),o=s(5671),n=s(3144),r=s(136),a=s(7277),l=s(2791),u=s(8687),c=s(6508),p=s(5705),f=s(184),d=function(e){return(0,f.jsx)(p.J9,{initialValues:{newPostText:""},onSubmit:function(t,s){var i=s.resetForm;console.log(t.newPostText),function(t){e.sendPost(t)}(t.newPostText),i({values:""})},children:function(){return(0,f.jsxs)(p.l0,{children:[(0,f.jsx)("div",{children:(0,f.jsx)(p.gN,{name:"newPostText",as:"textarea",placeholder:"enter text"})}),(0,f.jsx)("button",{type:"submit",children:"Send"})]})}})},h={content:"MyPosts_content__9IAt7"},x="Post_item__QLrUw",j=function(e){return(0,f.jsxs)("div",{className:x,children:[(0,f.jsx)("img",{src:"https://www.kibrispdr.org/data/999/avatar-logo-template-1.jpg",alt:""}),e.message,(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Like"})," ",e.likes]})]})},v=l.memo((function(e){var t=e.postsData.map((function(e){return(0,f.jsx)(j,{message:e.post,likes:e.likes},e.id)}));return(0,f.jsx)("div",{className:h.content,children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"My Posts"}),(0,f.jsx)("div",{children:(0,f.jsx)(d,{sendPost:e.sendPost})}),(0,f.jsx)("div",{className:h.posts,children:t})]})})})),m=(0,u.$j)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{sendPost:function(t){e((0,c.Wl)(t))}}}))(v),g="Profile_content__DGrjF",_=s(885),b=s(0),P={profile__header:"ProfileInfo_profile__header__-gzEh",profile__info:"ProfileInfo_profile__info__E9SNE",profile__infoAva:"ProfileInfo_profile__infoAva__kHeqU",profile__infoContact:"ProfileInfo_profile__infoContact__O9coq",profile__contact:"ProfileInfo_profile__contact__9goMH"},k=function(e){var t=(0,l.useState)(!1),s=(0,_.Z)(t,2),i=s[0],o=s[1],n=(0,l.useState)(e.status),r=(0,_.Z)(n,2),a=r[0],u=r[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,f.jsxs)("div",{children:[!i&&(0,f.jsxs)("div",{children:["Status: ",(0,f.jsx)("span",{onDoubleClick:function(){o(!0)},children:e.status})]}),i&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(a)},onChange:function(e){u(e.currentTarget.value)},value:a})})]})},S=s(5019),w=function(e){var t=e.contactTitle,s=e.contactValue;return(0,f.jsx)("div",{className:P.profile__contact,children:(0,f.jsx)("ul",{children:(0,f.jsxs)("li",{children:[t,": ",(0,f.jsx)("span",{children:s})]})})})},I=function(e){return(0,f.jsxs)("div",{className:P.profile__info,children:[e.isOwner&&(0,f.jsx)("button",{onClick:e.activateEditMode,children:"Edit"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:["Full name: ",(0,f.jsx)("span",{children:e.profile.fullName})]}),(0,f.jsxs)("li",{children:["Looking for a job: ",(0,f.jsx)("span",{children:e.profile.lookingForAJob?"Yes":"No"})]}),(0,f.jsxs)("li",{children:["Looking for a job description: ",(0,f.jsx)("span",{children:e.profile.lookingForAJobDescription})]}),(0,f.jsxs)("li",{children:["About Me: ",e.profile.aboutMe]})]}),(0,f.jsxs)("div",{children:["Contacts: ",Object.keys(e.profile.contacts).map((function(t){return(0,f.jsx)(w,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},N=function(e){var t=e.initialValues,s=t.fullName,i=void 0===s?"":s,o=t.lookingForAJob,n=void 0!==o&&o,r=t.lookingForAJobDescription,a=void 0===r?"":r,l=t.aboutMe,u=void 0===l?"":l,c=t.contacts,d=void 0===c?{facebook:null,instagram:null,twitter:null,vk:null,website:null,youtube:null,github:null,mainLink:null}:c;return(0,f.jsx)(p.J9,{enableReinitialize:!0,initialValues:{fullName:i,lookingForAJob:n,lookingForAJobDescription:a,aboutMe:u,contacts:d},onSubmit:function(t){e.saveProfileInfo(t),e.setEditMode(!1)},children:function(){return(0,f.jsxs)(p.l0,{children:[(0,f.jsx)("button",{type:"submit",children:"Save"}),(0,f.jsx)("div",{children:(0,f.jsx)(p.gN,{name:"fullName",type:"text",placeholder:"Full name"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)(p.gN,{name:"lookingForAJob",type:"checkbox",id:"lookingForAJob"}),(0,f.jsxs)("label",{htmlFor:"lookingForAJob",children:[(0,f.jsx)("b",{children:" Looking for a job"})," "]})]}),(0,f.jsx)("div",{children:(0,f.jsx)(p.gN,{name:"lookingForAJobDescription",as:"textarea",placeholder:"My professional skills"})}),(0,f.jsx)("div",{children:(0,f.jsx)(p.gN,{name:"aboutMe",as:"textarea",placeholder:"About me"})}),(0,f.jsxs)("div",{children:["Contacts: ",Object.keys(e.profile.contacts).map((function(e){return(0,f.jsxs)("div",{className:P.contacts,children:[(0,f.jsx)("div",{children:e}),(0,f.jsx)(p.gN,{name:"contacts.".concat(e),placeholder:e}),(0,f.jsx)(p.Bc,{name:"contacts.".concat(e),component:"div"})]},e)}))]})]})}})},A=function(e){var t=(0,l.useState)(!1),s=(0,_.Z)(t,2),i=s[0],o=s[1];if(!e.profile)return(0,f.jsx)(b.Z,{});return(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:P.profile__header,children:(0,f.jsx)("img",{src:"https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg",alt:""})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{className:P.profile__infoAva,src:e.profile.photos.large||S,alt:""}),(0,f.jsx)("div",{className:P.profile__infoInput}),e.isOwner&&(0,f.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),i?(0,f.jsx)(N,{setEditMode:o,saveProfileInfo:e.saveProfileInfo,initialValues:e.profile,profile:e.profile}):(0,f.jsx)(I,{activateEditMode:function(){return o(!0)},isOwner:e.isOwner,profile:e.profile}),(0,f.jsx)(k,{status:e.status,profile:e.profile,updateStatus:e.updateStatus})]})]})},y=function(e){return(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)(A,{profile:e.profile,status:e.status,isOwner:e.isOwner,updateStatus:e.updateStatus,saveProfileInfo:e.saveProfileInfo}),(0,f.jsx)(m,{})]})},F=s(6871),M=s(7781),J=function(e){(0,r.Z)(s,e);var t=(0,a.Z)(s);function s(e){var i;return(0,o.Z)(this,s),(i=t.call(this,e)).state={isShowMyProfile:!0},i}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){var e=+this.props.router.params.userId,t=this.props.authorizedUserId;e?(this.props.getUserProfile(e),this.props.getStatus(e)):this.props.isAuth&&(this.props.getUserProfile(t),this.props.getStatus(t))}},{key:"componentDidUpdate",value:function(e,t,s){var i=+this.props.router.params.userId,o=this.props.authorizedUserId;this.state.isShowMyProfile&&(i===o&&this.setState({isShowMyProfile:!1}),!i&&this.props.isAuth&&(this.props.getUserProfile(o),this.props.getStatus(o),this.setState({isShowMyProfile:!1})))}},{key:"render",value:function(){if(!this.props.isAuth&&!this.props.router.params.userId)return(0,f.jsx)(F.Fg,{to:"/login"});var e=+this.props.router.params.userId,t=this.props.authorizedUserId,s=!1;return(!e&&this.props.isAuth||e===t)&&(s=!0),(0,f.jsx)("div",{children:(0,f.jsx)(y,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:s,savePhoto:this.props.savePhoto,saveProfileInfo:this.props.saveProfileInfo})})}}]),s}(l.Component);var C=(0,M.qC)((function(e){return function(t){var s=(0,F.TH)(),o=(0,F.s0)(),n=(0,F.UO)();return(0,f.jsx)(e,(0,i.Z)((0,i.Z)({},t),{},{router:{location:s,navigate:o,params:n}}))}}),(0,u.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:c.et,getStatus:c.lR,updateStatus:c.Nf,savePhoto:c.Ju,saveProfileInfo:c.FX}))(J)},5019:function(e,t,s){e.exports=s.p+"static/media/ava.3d1b290ad06cb5d38b93.webp"}}]);
//# sourceMappingURL=592.f24a87fe.chunk.js.map