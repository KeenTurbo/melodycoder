define(function(e,t){var n=e("interface"),r=e("components").dialog,i=e("tpl"),o=new Template(i.commentTPL);t.init=function(){var e=$("respond"),t=$("comment-list");e.observe("click",function(e){var i=Element.extend(this),s=Element.extend(e.target);if("submit"==s.className){var a=i.select(".author")[0],u=i.select(".mail")[0],c=i.select(".webside")[0],l=i.select(".comment")[0];new Ajax.Request(n.ADD_COMMENT,{parameters:"author="+a.value+"&mail="+u.value+"&webside="+c.value+"&comment="+l.value+"&postId="+YYMG.pid,onSuccess:function(e){var e=e.responseText.evalJSON();if(1==e.status.code)if(e.data.isApproved){var n=new Date(e.data.time),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"],s={pid:YYMG.pid,author:a.value,comment:l.value.escapeHTML(),month:i[n.getMonth()],date:n.getDate(),year:n.getFullYear(),hour:n.getHours(),minute:n.getMinutes()},u=o.evaluate(s);t?t.insert(u):location.reload()}else new r({showClose:!1,content:"评论成功！需要管理员审核才能显示。"}).addButton("确定",function(){this.close()});else new r({content:e.status.content})},onFailure:function(){new dialog({type:"error",content:""})}})}})},t.listInit=Prototype.emptyFunction});