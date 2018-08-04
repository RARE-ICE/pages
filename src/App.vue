<template>
        <div class="page-content">
            <section id="summary" class="content-section">
                <div class="section-heading">
                    <h1>Git 项目演示<br><em>简介</em></h1>
                    <p> Git 项目演示地址
                    <br>及演示项目简介</p>
                </div>
                <div class="section-content">
                    <div class="tabs-content">
                        <div class="wrapper">
                            <section id="first-tab-group" class="tabgroup">
                                <div id="tab1">
                                    <ul style="text-align: left;">
                                        <li>
                                            <div class="item">
                                                <div class="text-content">
                                                    <h4>常用 vue 组件整理</h4>
                                                    <span>2018-08-01</span>
                                                    <p>一些 vue 组件的实现。以 JS 的实现为主，尽量剥离样式。默认情况下以 bootstrap 样式为基础样例</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#vue_components">查看详情</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section> 
                        </div>
                    </div>
                </div>
            </section>
            <section id="vue_components" class="content-section">
                <div class="section-heading">
                    <h1>Vue Components<br><em>2018-08-01</em></h1>
                    <p>一些 vue 组件的实现。以 JS 的实现为主，尽量剥离样式。<br>默认情况下以 bootstrap 样式为基础样例</p>
                </div>
                <div class="section-content" id="vueComponentContent">
                     <vue-component />   
                </div>         
            </section>
            <section id="contact" class="content-section">
                <div id="contact-content">
                    <div class="section-heading" style="margin-left:-60px;">
                        <h1>Contact<br><em>星辰</em></h1>
                        <p>暂不可用</p>
                        
                    </div>
                    <div class="section-content">
                        <form id="contact" action="#" method="post">
                            <div class="row">
                                <div class="col-md-4">
                                  <fieldset>
                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required="">
                                  </fieldset>
                                </div>
                                <div class="col-md-4">
                                  <fieldset>
                                    <input name="email" type="email" class="form-control" id="email" placeholder="Your email..." required="">
                                  </fieldset>
                                </div>
                                 <div class="col-md-4">
                                  <fieldset>
                                    <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject..." required="">
                                  </fieldset>
                                </div>
                                <div class="col-md-12">
                                  <fieldset>
                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required></textarea>
                                  </fieldset>
                                </div>
                                <div class="col-md-12">
                                  <fieldset>
                                    <button type="submit" id="form-submit" class="btn">Send Message Now</button>
                                  </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section class="footer">
                <p>Copyright &copy; 2018</p>
            </section>
        </div>
</template>

<script>
import {VueComponent} from "./projects"

export default { 
  name: 'app',
  components:{VueComponent},
  created:function(){
    require.ensure([], function(){
       require('../assets/js/plugins.js');
       let initApp = require('../assets/js/main.js').default;
       initApp();
    });
  }
}
</script>
