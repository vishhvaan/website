<script>
    import logo from '$lib/assets/images/logo.jpg'
</script>

<a id="logo" href="/">
    <div id="icon" style="background-image: url({logo})"></div>
    <div id="title">
        <h1>Vishhvaan Gopalakrishnan</h1>
    </div>
</a>


<style lang="scss">
    #logo {
        float: left;

        #icon {
            display: inline-block;
            // float: left;
            margin-right: 20px;
            width: 105px;
            height: 105px;
            border-radius: 5px;
            background-size: 105px 105px;
            background-repeat: no-repeat;
            filter: grayscale(100%) contrast(150%);
            -webkit-filter: grayscale(100%) contrast(150%);
        }
        #icon:hover {
            filter: none;
            -webkit-filter: none;
        }
    }

</style>


