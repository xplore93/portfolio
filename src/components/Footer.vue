<template>
<!-- Site footer -->
<footer class="site-footer" :style="{ background: accentColor[0] }">
    <div class="container">
        <div class="text-center mb-5 section-intro mx-auto">
            <h6>¿Interesado en colaborar?</h6>
            <p>
                Si está interesado en colaborar conmigo o tiene una oferta para mi, puede <router-link to="/contact"><strong>contactarme</strong></router-link>.
            </p>
        </div>
        <hr>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Eugeniu Stina</p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                    <li><a class="twitter" href="https://twitter.com/Eugeniu_93"><i class="fa fa-twitter"></i></a></li>
                    <li><a class="linkedin" href="https://www.linkedin.com/in/estina/"><i class="fa fa-linkedin"></i></a></li>
                    <li><a class="dribbble" href="https://github.com/xplore93"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import {
    mapState
} from "vuex";

export default {
    computed: mapState(["accentColor"])
};
</script>

<style scoped>
.site-footer {
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: rgba(255, 255, 255, .55);
}

.site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5
}

.site-footer hr.small {
    margin: 20px 0
}

.site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px
}

.site-footer a {
    color: rgba(255, 255, 255, .55);
    text-decoration: none;
}

.site-footer .social-icons {
    text-align: right
}

.site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
}

.copyright-text {
    margin: 0
}

@media (max-width:991px) {
    .site-footer [class^=col-] {
        margin-bottom: 30px
    }
}

@media (max-width:767px) {
    .site-footer {
        padding-bottom: 0
    }

    .site-footer .copyright-text,
    .site-footer .social-icons {
        text-align: center
    }
}

.social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.social-icons li {
    display: inline-block;
    margin-bottom: 4px
}

.social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    font-size: 13px
}

.social-icons a {
    color: white;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
    border-radius: 30%;
}

.social-icons a:hover {
    background: rgba(0, 0, 0, 0.2);
}

@media (max-width:767px) {
    .social-icons li.title {
        display: block;
        margin-right: 0;
        font-weight: 600
    }
}

.section-intro {
    max-width: 780px;
}
</style>
