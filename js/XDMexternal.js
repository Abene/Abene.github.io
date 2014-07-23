(function(){
    $(document).ready(function(){

//outer javascript
        cheetahWidget2012_IframeHeight: function(apikey,buttonPosition,hostUrl,pluginType,outTime){
            dropifiQuery('#cheetahWidget2012_contactForm').html(""); 
            var requestUrl = window.location.href; 
            var transport = new easyXDM.Socket(/** The configuration */{  
                remote: "http://appengine.dropifi.com/clientswidgets/show_widget_content?publicKey="+apikey+"&buttonPosition="+buttonPosition+"&hostUrl="+hostUrl+"&pluginType="+pluginType+"&requestUrl="+requestUrl, 
            //swf: "https://s3.amazonaws.com/dropifi/js/widget/easyxdm.swf",
            container: "cheetahWidget2012_contactForm",  
            onMessage: function(message,origin){  

                var data = DropifiWidgetLoad.toArrayJSon(message);  
                switch(data.type){ 
                    case 'iframe': 
                    var h = new Number(data.height);
                    var iframe = this.container.getElementsByTagName("iframe")[0];                  
                    iframe.id ='cheetahWidget2012_contactable_iframe';  
                    iframe.frameBorder = 0; 
                    iframe.scrolling = 'no';  
                    iframe.marginheight="0px";
                    iframe.marginwidth="0px";           
                    iframe.style.height = "100%";
                    iframe.style.width = "100%";
                    iframe.style.overflow="hidden";                             
                    iframe.style.border="0px;";             
                    dropifiQuery("#dropifiwidget_iframe").css({'padding':'0px','margin':'0px','overflow':'hidden','border':'0px'});
                    
                    dropifiQuery('.widget-container #widget-form').css({'height':h+"px"});
                    DropifiWidgetLoad.resetCFPosition();
                    
                    break; 
                    case 'closeWindow':                
                    DropifiWidgetLoad.dropifi_widget_reload_content = true;
                    setTimeout('DropifiWidgetLoad.auto_hide_drofpifi_widget()',3500); 
                    break;
                    case 'changeHeight':
                    var h= new Number(data.height);
                    dropifiQuery('#dropifi_widget_v1_contactable #cheetahWidget2012_contactForm').css({'height':h+"px"});
                    if((DropifiWidgetLoad.posi=="right") || (DropifiWidgetLoad.posi=="left")){
                        DropifiWidgetLoad.resetCFPosition(); 
                    } 
                    
                    break;
                    case 'closeInstantly':
                        //DropifiWidgetLoad.dropifi_widget_reload_content = true; 
                        //DropifiWidgetLoad.dropifi_widget_is_close_2012 == false; 
                        DropifiWidgetLoad.auto_hide_drofpifi_widget();
                        break;
                        case 'captureScreen': 
                        DropifiWidgetLoad.captureScreen(data.publickey);
                        break; 
                    } 
                    
                },
                onHeightChange: function(message,origin){

                }
            });  
        } ,
        auto_hide_drofpifi_widget:function (){
            var this_id_prefix = '#dropifi_widget_v1_contactable'+" "; 
            if(DropifiWidgetLoad.dropifi_widget_is_close_2012 !=undefined && DropifiWidgetLoad.dropifi_widget_is_close_2012 == false){      
                dropifiQuery(this_id_prefix+'div#cheetahWidget2012_contactable_inner').trigger('click');
            }
        },
        toArrayJSon: function(message){
            var arr={};
            dropifiQuery.each(message.split(','),function(key,val){  
                var values = val.split(':');         
                arr[values[0]] = values[1];                 
            });
            return arr;
        }
    });
})();