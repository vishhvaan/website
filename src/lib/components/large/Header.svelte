<script>
    import logo from '$lib/assets/images/logo.jpg'
</script>

<header id="header"> 
    <a id="logo" href="/">
        <div id="icon" style="background-image: url({logo})"></div>
        <div id="title">
            <h1>Vishhvaan Gopalakrishnan</h1>
        </div>
    </a>
</header>



<style lang="scss">

    @import '$lib/scss/_mixins.scss';

    #header {
        box-sizing: border-box;
        margin: 0 auto 2rem;
        width: 100%;

        a {
            background: none;
            color: inherit;
            text-decoration: none;
        }

        h1 {
            margin-top: 0;
            margin-bottom: 0;
            color: var(--color--text);
            letter-spacing: 0.01em;
            font-weight: 700;
            font-style: normal;
            font-size: 1.5rem;
            line-height: 2rem;

            @include antialias();
        }

        #logo {
            display: inline-block;
            width: 100%;

            #title {
                margin-top: 0;
                padding-top: 27px;
                // width: 1500px;
            }

            #icon {
                float: left;
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
    }

</style>


