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
      heightStyle: 'content',
      classes: {
        "ui-accordion": 'ui-accordion-header',
      },
      // icons: icons //{ "header": "faq__icon-disabled", "activeHeader": "faq__icon-active" }

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
  // document.querySelectorAll('.search__btn').forEach(function (searchBtn) {
  //     searchBtn.addEventListener('click', function (searchBtn) {
  //         document.querySelectorAll('.head__field').forEach(function (headFieldElement) {
  //             headFieldElement.classList.remove('head__field')
  //         })
  //         searchBtn.currentTarget.classList.add('head__field')
  //     })
  // })
})
