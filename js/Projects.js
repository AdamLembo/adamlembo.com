$(function()
    {               
        var iCurX = 0;
        
        function updateIndicator() {
            var $indicator = $("#olIndicators"),
                iActive = Math.abs(Math.ceil(iCurX) % 6);     
            $indicator.children().removeClass("active");                
            $indicator.children().eq(iActive).addClass("active");
        }

        var clickEventType = (document.ontouchstart!==null) ? 'mousedown' : 'touchstart';
        $(".glyphicon-chevron-left, .glyphicon-chevron-right").bind(clickEventType, function(e)
        {                
            e.preventDefault();
            e.stopPropagation();                
        })        
        .click(function(e)
        {
            e.preventDefault();
            e.stopPropagation();                

            iCurX += (this.id == "aPrev") ? 1: -1;
            $("#divContainer").data("plugin_ecoScroll").moveByCoord(iCurX, 0, {duration: 400});                            
        });        
        
        $("#divContainer").ecoScroll({
            itemWidth: "100%",
            itemHeight: "100%",
            rangeX : [undefined,undefined],
            axis : "x",
            snap: true,
            onShow:function(oParam) 
            {
                if (oParam.bNew && oParam.y == 0)
                oParam.$e.append("<img src='..//img//img" + Math.abs( (oParam.x)%6 ) + ".jpg' />");
            },
            onStop:function(oParam) 
            {                                                                           
                iCurX = oParam.wrapperLeft/oParam.cellWidth;                    
                updateIndicator();
            },
            onResize:function(oParam)
            {                    
                $("#divContainer").data("plugin_ecoScroll").moveByCoord(iCurX, 0);       
            }
        });            
    });