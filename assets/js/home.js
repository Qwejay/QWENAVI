    <style>
        * {
            box-sizing: border-box;
        }
        #container {
            width: 500px;
            height: 820px;
            margin: 0 auto;
        }
        div.search {padding: 30px 0;}

        form {
            position: relative;
            width: 300px;
            margin: 0 auto;
        }

        input, button {
            border: none;
            outline: none;
        }

        input {
            width: 100%;
            height: 42px;
            padding-left: 13px;
        }

        button {
            height: 42px;
            width: 42px;
            cursor: pointer;
            position: absolute;
        }

        /*搜索框6
        /*.bar6 {background: #F9F0DA;}*/
        .bar6 input {
            border: 2px solid #d11282;
            border-radius: 5px;
            background: transparent;
            top: 0;
            right: 0;
        }
        .bar6 button {
            background: #d11282;
            border-radius: 0 5px 5px 0;
            width: 60px;
            top: 0;
            right: 0;
        }
        .bar6 button:before {
            content: "搜索";
            font-size: 13px;
            color: #F9F0DA;
        }


    </style>