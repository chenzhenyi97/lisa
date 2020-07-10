class multipleSelect {
    constructor(parentElId, options) {
        this.parentElId = parentElId;
        this.parentEl = document.querySelector(`#${parentElId}`);
        this.options = options;
        this.placeholder = options.placeholder;
        this.selectList = options.selectList; //下拉框数据
        this.selectEdArr = []; //已经选择的

        this.initTemplateStyle()
        this.setMultipleSelectTemplate()
        this.selectItemClick()
        this.bottomBtnClick()
        this.selectHeadClick()

        Array.prototype.indexOf = function (val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == val) return i;
            }
            return -1;
        };
        Array.prototype.remove = function (val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };

        /**
         * [copy description] 简单深拷贝
         * @param  {[type]} object [description] 被拷贝的元素
         * @return {[type]} [description]
         */
        window.copy = function(object) {
            let objectCopy;
            try {
                objectCopy = JSON.parse(JSON.stringify(object));
            } catch (e) {
                console.log('简单深拷贝失败');
            }
            return objectCopy;
        };
    }
    /**
     * [destroy description] 销毁组件
     * @return {[type]} [description]
     */
    destroy() {
        this.templateNode.innerHTML = "";
        this.style.remove();
    }
    /**
     * [initTemplateStyle description] 初始化样式
     * @return {[type]} [description]
     */
    initTemplateStyle() {
        let styleInner = `
         #${this.parentElId} {
            display: inline-block;
            vertical-align: top;
          }
         #${this.parentElId} .multipleSelec {
            width: 100%;
            padding: 8px 15px 8px 8px;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0);
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            position: relative;
            cursor: pointer;
          }
         #${this.parentElId} .multipleSelec:hover {
            border: 1px solid #1d9900;
          }
         #${this.parentElId} .multipleSelec:hover .select_head .select_arrow_down {
            transform: rotate(180deg);
          }
         #${this.parentElId} .multipleSelec:hover .select_hover_box {
            display: block;
          }
         #${this.parentElId} .multipleSelec .select_head {
            font-size: 0;
            position: relative;
            z-index: 2;
          }
         #${this.parentElId} .multipleSelec .select_head .selected_box {
            height: 24px;
            background: rgba(0, 0, 0, 0.06);
            display: inline-block;
            vertical-align: top;
            padding-right: 8px;
          }
          #${this.parentElId} .multipleSelec .select_head .placeholder {
            color:#ddd;
            font-size:16px;
            display:inline-block;
          }
          #${this.parentElId} .multipleSelec .select_head .placeholder.none{
            display:none;
          }
          #${this.parentElId} .multipleSelec .select_head .none_text {
            display:none ;
          }
         #${this.parentElId} .multipleSelec .select_head .selected_box .select_text {
            text-indent: 7px;
            display: inline-block;
            max-width: 190px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            line-height: 24px;
          }
         #${this.parentElId} .multipleSelec .select_head .selected_box .select_delete {
            width: 14px;
            display: inline-block;
            margin-top: -23px;
            margin-left: 5px;
            cursor: pointer;
          }
         #${this.parentElId} .multipleSelec .select_head .select_num {
            display: inline-block;
            vertical-align: top;
            background: rgba(0, 0, 0, 0.06);
            border-radius: 2px;
            height: 24px;
            padding: 0 8px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            line-height: 24px;
            margin-left: 5px;
          }
          #${this.parentElId} .multipleSelec .select_head .smallNum{
            background: #fff;
            color:#fff;
          }
         #${this.parentElId} .multipleSelec .select_head .select_arrow_down {
            width: 16px;
            float: right;
            margin-top: 4px;
          }
         #${this.parentElId} .multipleSelec .select_hover_box {
            left: -2px;
            top: 20px;
            padding-top: 30px;
            position: absolute;
            width: 334px;
            z-index: 1;
            display:none;
          }
          #${this.parentElId} .multipleSelec .select_hover_box_none {
            display:none !important;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main {
            border-radius: 2px;
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
            border: 1px solid #e0e0e0;
            width: 334px;
            height: 333px;
            background: #ffffff;
            overflow-y: auto;
            padding-bottom: 56px;
            box-sizing: border-box;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main::-webkit-scrollbar {
            /*滚动条整体样式*/
          
            width: 4px;
            /*定义纵向滚动条宽度*/
          
            height: 4px;
            /*定义横向滚动条高度*/
          
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main::-webkit-scrollbar-thumb {
            /*滚动条内部滑块*/
          
            border-radius: 8px;
            background-color: rgba(144, 146, 152, 0.3);
            transition: background-color 0.3s;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main::-webkit-scrollbar-thumb:hover {
            /*鼠标悬停滚动条内部滑块*/
          
            background: #bbb;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main::-webkit-scrollbar-track {
            /*滚动条内部轨道*/
          
            background: transparent;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main .item {
            padding: 10px 15px;
            box-sizing: border-box;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main .item:hover {
            background: rgba(0, 0, 0, 0.03);
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main .item:hover p {
            color: rgba(0, 0, 0, 0.65);
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main .item.selectEd_item {
            background: rgba(0, 0, 0, 0.03);
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main .item.selectEd_item .selectEd_ico {
            display: block;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main .item p {
            display: inline-block;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            line-height: 24px;
            max-width: 270px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_hover_box_main .item .selectEd_ico {
            width: 16px;
            float: right;
            margin-top: 5px;
            display: none;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_btn_box {
            position: absolute;
            bottom: 0;
            background: #fff;
            height: 56px;
            left: 1px;
            width: calc(98%);
            padding: 0 15px;
            box-sizing: border-box;
            border-top: 1px solid #eee;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_btn_box p {
            float: right;
            font-size: 16px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            line-height: 56px;
            margin-left: 24px;
          }
         #${this.parentElId} .multipleSelec .select_hover_box .select_btn_box p.select_Enter {
            color: #1D9900;
          }          
    	`;
        this.style = document.createElement("style");
        this.style.innerHTML = styleInner;
        document.body.appendChild(this.style);
    }

    //下拉框点击事件
    selectItemClick() {
        let self = this;
        $(`#${this.parentElId} .select_hover_box_main .item`).bind('click', function () {
            var text = $(this).find('p').html();
            if ($(this).hasClass('selectEd_item')) {
                $(this).removeClass('selectEd_item')
                self.selectEdArr.remove(text)
            } else {
                $(this).addClass('selectEd_item')
                self.selectEdArr.push(text)
            }


            var innerH = self.selectEdArr.join('');
            if(self.selectEdArr.length>0){
                $(`#${self.parentElId} .select_head .placeholder`).addClass('none')
                $(`#${self.parentElId} .select_head .selected_box`).removeClass('none_text').find('.select_text').html(innerH);
            }else{
                $(`#${self.parentElId} .select_head .selected_box`).addClass('none_text').find('.select_text').html(innerH);
                $(`#${self.parentElId} .select_head .placeholder`).removeClass('none')
            }
            
            if(self.selectEdArr.length>1){
                $(`#${self.parentElId} .select_head .select_num`).removeClass('smallNum').html(`+ ${self.selectEdArr.length}`);
            }else{
                $(`#${self.parentElId} .select_head .select_num`).addClass('smallNum')
            }
        })
    }

    //底部按钮点击事件
    bottomBtnClick(){
        var self = this;
        $(`#${self.parentElId} .select_btn_box .select_Enter`).bind('click',function(){
            if( typeof self.options.enter == 'function' ){
                self.options.enter( copy(self.selectEdArr) )
                $(`#${self.parentElId} .select_hover_box`).addClass('select_hover_box_none')
                setTimeout(()=>{
                    $(`#${self.parentElId} .select_hover_box`).removeClass('select_hover_box_none')
                },100)
            }
        })

        $(`#${self.parentElId} .select_btn_box .select_cancel`).bind('click',function(){
            if( typeof self.options.cancel == 'function' ){
                self.options.cancel('cancel')
                self.clearSelect()
                $(`#${self.parentElId} .select_hover_box`).addClass('select_hover_box_none')
                setTimeout(()=>{
                    $(`#${self.parentElId} .select_hover_box`).removeClass('select_hover_box_none')
                },100)
            }
        })
    }

    //选择框head点击事件
    selectHeadClick(){
        var self = this;
        $(`#${self.parentElId} .select_head .select_delete`).bind('click',function(){
            if( typeof self.options.cancel == 'function' ){
                self.options.cancel('cancel')
                self.clearSelect()
                $(`#${self.parentElId} .select_hover_box`).addClass('select_hover_box_none')
                setTimeout(()=>{
                    $(`#${self.parentElId} .select_hover_box`).removeClass('select_hover_box_none')
                },100)
            }
        })
    }

    //清除所有选择
    clearSelect(){
        var self = this;
        self.selectEdArr = [];
        $(`#${self.parentElId} .select_head .selected_box`).addClass('none_text');
        $(`#${self.parentElId} .select_hover_box_main .item`).removeClass('selectEd_item')
        $(`#${self.parentElId} .select_head .select_num`).addClass('smallNum')
        $(`#${self.parentElId} .select_head .placeholder`).removeClass('none')
    }

    //构造多选下拉框模版
    setMultipleSelectTemplate() {
        let template = `
            <div class="multipleSelec">
                <div class="select_head">
                    <p class="placeholder">${this.placeholder}</p>
                    <p class="selected_box none_text">
                        <span class="select_text">${this.placeholder}</span>
                        <img src="./images/re_fe_delete_full@2x.png" class="select_delete">
                    </p>
                    <p class="select_num smallNum"></p>
                    <img src="./images/re_fe_arrow_down@2x.png" class="select_arrow_down">
                </div>
                <div class="select_hover_box">
                    <div class="select_hover_box_main">
                        <!-- selectEd_item -->
                        ${(()=>{
                            return this.selectList.map((item)=>{
                                return `<div class="item ">
                                            <p>${item}</p>
                                            <img src="./images/re_fe_seleted@2x.png" class="selectEd_ico">
                                        </div>`;
                            }).join("")
                        })()}
                    </div>
                    <div class="select_btn_box">
                        <p class="select_Enter">Enter</p>
                        <p class="select_cancel">Cancel</p>
                    </div>
                </div>
            </div>
        `;
        let templateNode = document.createElement('div');
        templateNode.innerHTML = template;
        this.templateNode = templateNode;
        this.parentEl.innerHTML = "";
        this.parentEl.appendChild(this.templateNode);

    }


}