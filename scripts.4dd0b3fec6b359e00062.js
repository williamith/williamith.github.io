const mobileBreakpoint=window.matchMedia("(max-width: 991px )");$(document).ready(function(){$(".dash-nav-dropdown-toggle").click(function(){$(this).closest(".dash-nav-dropdown").toggleClass("show").find(".dash-nav-dropdown").removeClass("show"),$(this).parent().siblings().removeClass("show")}),$(".menu-toggle").click(function(){mobileBreakpoint.matches?$(".dash-nav").toggleClass("mobile-show"):$(".dash").toggleClass("dash-compact")}),$(".searchbox-toggle").click(function(){$(".searchbox").toggleClass("show")})}),Chart.defaults.global.defaultFontFamily="'Open Sans', 'sans-serif'",window.chartColors={primary:"#3F84FC",secondary:"#727F94",success:"#1DAB47",info:"#8A3FFC",warning:"#FCAE3F",superwarning:"#fd7e14",danger:"#FC413F"};