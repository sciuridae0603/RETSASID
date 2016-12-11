<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="utf-8">
    <title>三鐵機場最新消息整合系統</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- 引入 Bootstrap 的 CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- main.css -->
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="index.php">三鐵機場最新消息整合系統</a>
    </nav>

    <section id="wrap" class="container">
        <div id="announcement" class="col-md-8">
            <h2>各站公告</h2>
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#railway" aria-controls="railway" role="tab" data-toggle="tab">臺鐵</a></li>
                <li role="presentation"><a href="#hsrailway" aria-controls="hsrailway" role="tab" data-toggle="tab">高鐵</a></li>
                <li role="presentation"><a href="#tyap" aria-controls="tyap" role="tab" data-toggle="tab">桃園機場</a></li>
                <li role="presentation"><a href="#ssap" aria-controls="ssap" role="tab" data-toggle="tab">松山機場</a></li>
            </ul>

            <div class="tab-content">
                <div id="railway" class="tab-pane active">
                    <table class="table table-bordered table-hover">
                        <thead><tr>
                            <td>標題</td>
                            <td>公告日期</td>
                        </tr></thead>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a v-bind:href="announcement.url" v-bind:href="announcement.title" target="_blank">{{
                                    announcement.title.length >= 40 ? announcement.title.substring(0,39) + '…' : announcement.title
                                }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#railway -->
                <div id="hsrailway" class="tab-pane">
                    <table class="table table-bordered table-hover">
                        <thead><tr>
                            <td>標題</td>
                            <td>公告日期</td>
                        </tr></thead>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a v-bind:href="announcement.url" v-bind:href="announcement.title" target="_blank">{{
                                    announcement.title.length >= 40 ? announcement.title.substring(0,39) + '…' : announcement.title
                                }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#hsrailway -->
                <div id="tyap" class="tab-pane">
                    <table class="table table-bordered table-hover">
                        <thead><tr>
                            <td>標題</td>
                            <td>公告日期</td>
                        </tr></thead>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a v-bind:href="announcement.url" v-bind:href="announcement.title" target="_blank">{{
                                    announcement.title.length >= 40 ? announcement.title.substring(0,39) + '…' : announcement.title
                                }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#tyap -->
                <div id="ssap" class="tab-pane">
                    <table class="table table-bordered table-hover">
                        <thead><tr>
                            <td>標題</td>
                            <td>公告日期</td>
                        </tr></thead>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a v-bind:href="announcement.url" v-bind:href="announcement.title" target="_blank">{{
                                    announcement.title.length >= 40 ? announcement.title.substring(0,39) + '…' : announcement.title
                                }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#ssap -->
            </div> <!-- /.tab-content -->
        </div> <!-- /#announcement -->

        <div id="sidebar" class="col-md-4 panel panel-default">
            <div id="weather">
                <div v-if="gps.countyName">
                    <div id="weather-icon" class="col-md-4 text-right">
                        <p class="h1"></p>
                        <img v-bind:src="districts[gps.countyName].icon" class="img-thumbnail">
                    </div> <!-- /#weather-icon -->
                    <div id="weather-text" class="col-md-8">
                        <p class="h3">{{ gps.countyName }}</p>
                        <p class="h4">{{ districts[gps.countyName].describe }}</p>
                        <p class="h5">紫外線指數 UV：{{ (uv[gps.countyName] ? uv[gps.countyName].UVI : '無資料') }}</p>
                        <p class="h5">空氣品質：{{ (airquality[gps.countyName] ? airquality[gps.countyName].Status : '無資料') }}</p>
                        <p class="h1"> </p>
                    </div> <!-- /#weather-text -->
                </div> <!-- /if -->
                <div v-else>
                    <div id="weather-loading" class="col-md-12">
                        <p class="h3">正在載入天氣資料……</p>
                        <p class="h1"> </p>
                    </div> <!-- /#weather-loading -->
                </div> <!-- /else -->
            </div> <!-- /#weather -->

            <hr>

            <div id="user">
                 <div v-if="uid">
                     <div class="col-md-4 text-right">
                         <h1></h1>
                         <img v-bind:src="photoUrl" class="img-thumbnail">
                     </div>
                     <div class="col-md-8">
                         <p class="h3">{{ user }}</p>
                         <button type="button" class="btn btn-block btn-success" v-on:click="showReportModal">回報</button>
                     </div>
                 </div>
                 <div v-else>
                     <button type="button" class="btn btn-block btn-primary" v-on:click="login">登入</button>
                 </div>

            <div class="modal fade" tabindex="-1" role="dialog" id="input-modal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">新回報</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <input type="title" class="form-control" placeholder="標題" v-model="modal.title">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="內容" rows="20" v-model="modal.body"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                            <button type="button" class="btn btn-primary" v-on:click="report">送出</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
            </div> <!-- /#user -->
        </div> <!-- /#sidebar -->

        <div id="report">
            <div class="col-md-12">
                <h2>網友回報</h2>
                <table class="table table-bordered">
                    <tbody>
                        <tr v-for="(post, key) in posts">
                            <td><a href="#" v-on:click="show(key)">{{ post.title }}</a></td>
                            <td>{{ post.author }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="modal fade" tabindex="-1" role="dialog" id="report-modal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">{{ modal.title }}</h4>
                        </div>
                        <div class="modal-body">
                            <p>{{ modal.body }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
        </div> <!-- /#report -->
    </section> <!-- /#wrap -->


    <section id="footer">
        <div class="container-fluid">
            <div class="col-sm-12">
                <button type="button" class="btn btn-default btn-large">P</button> Powered by 只是路過別人的畢業專題展覽沒想到居然就開始了黑客松
            </div>
            <div class="col-sm-12">
                <ul class="list-inline">
                    <li><a href="about.html">About Us</a> |</li>
                    <li><a href="https://github.com/sciuridae0603/RETSASID">Source Code</a></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- 在 Body 關閉前載入 JS -->
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <!-- Bootstrap 的 JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script> 
    <!-- Vue.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.3/vue.min.js"></script>
    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/3.6.3/firebase.js"></script>
    <!-- Firebase Google API Provider -->
    <script src="https://apis.google.com/js/platform.js" defer></script>

    <!-- main.js -->
    <script src="main.js"></script>
</body>
</html>
<!-- by 只是路過別人的畢業專題展覽沒想到居然就開始了黑客松 -->
