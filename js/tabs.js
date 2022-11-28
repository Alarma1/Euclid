document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    speed: 800,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // And if we need scrollbar
    scrollbar: {
      hide: true,
    },
    effect: 'slide',
  })
  document.querySelectorAll('.work__tabs').forEach(function (heroTabs) {
    heroTabs.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab__content').forEach(function (tabContent) {
        tabContent.classList.remove('tab__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab__content-active')

      document.querySelectorAll('.work__tabs').forEach(function (workTabs) {
        workTabs.classList.remove('tabs__color')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs__color')
    })
  })
  $(function () {

    // var icons = {
    //   header:"svg img",
    //   activeHeader:"svg img"
    // }

    $("#accordion").accordion({
      active: false,
      collapsible: true,
      heightStyle: "auto",
      classes: {
        "ui-accordion": 'ui-accordion-header',
      },
      icons: false
    });
  })
  document.querySelectorAll('.head__burger').forEach(function (headBurger) {
    headBurger.addEventListener('click', function (headBurger) {
      document.querySelectorAll('.head__burger').forEach(function (headBurgerElement) {
        headBurgerElement.classList.remove('head__burger-hide')
      })
      headBurger.currentTarget.classList.add('head__burger-hide')
    })
  })
  document.querySelector('.search__btn').addEventListener('click', function () {
    document.querySelector('.head__field').classList.toggle('head__field-stealth')
  })
})
