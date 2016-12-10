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
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#railway" aria-controls="railway" role="tab" data-toggle="tab">臺鐵</a></li>
                <li role="presentation"><a href="#hsrailway" aria-controls="hsrailway" role="tab" data-toggle="tab">高鐵</a></li>
                <li role="presentation"><a href="#tyap" aria-controls="tyap" role="tab" data-toggle="tab">桃園機場</a></li>
                <li role="presentation"><a href="#ssap" aria-controls="ssap" role="tab" data-toggle="tab">松山機場</a></li>
            </ul>

            <div class="tab-content">
                <div id="railway" class="tab-pane active">
                    <table>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a href="{{ announcement.url }}">{{ announcement.title }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#railway -->
                <div id="hsrailway" class="tab-pane">
                    <table>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a href="{{ announcement.url }}">{{ announcement.title }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#hsrailway -->
                <div id="tyap" class="tab-pane">
                    <table>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a href="{{ announcement.url }}">{{ announcement.title }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#tyap -->
                <div id="ssap" class="tab-pane">
                    <table>
                        <tbody>
                            <tr v-for="announcement in announcements">
                                <td class="title"><a href="{{ announcement.url }}">{{ announcement.title }}</a></td>
                                <td class="date"><span>{{ announcement.date }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> <!-- /#ssap -->
            </div> <!-- /.tab-content -->
        </div> <!-- /#announcement -->
    </section> <!-- /#wrap -->

    <!-- 在 Body 關閉前載入 JS -->
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <!-- Bootstrap 的 JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script> 
    <!-- Vue.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.3/vue.min.js"></script>
    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/3.6.3/firebase.js"></script>

    <!-- main.js -->
    <script src="main.js"></script>
</body>
</html>
<!-- by 只是路過別人的畢業專題展覽沒想到居然就開始了黑客松 -->
