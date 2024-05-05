<!DOCTYPE html>


<html id="theme_21" lang="en" webcrx="">
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        transition: opacity ease-in 0.2s;
      }
      body[unresolved] {
        opacity: 0;
        display: block;
        overflow: hidden;
        position: relative;
      }

      #myModal{
 z-index: 9999
    }
    </style>

      <style>
          .float{
              position:fixed;
              width:60px;
              height:60px;
              bottom:40px;
              right:40px;
              background-color:#25d366;
              color:#FFF;
              border-radius:50px;
              text-align:center;
              font-size:30px;
              box-shadow: 2px 2px 3px #999;
              z-index:100;
          }

          .my-float{
              margin-top:16px;
          }
      </style>



    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ACEBOOSTS</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="google-site-verification" content="" />

    <link
      rel="stylesheet"
      type="text/css"
      href="<?php echo e(url('')); ?>/assets/dashboard/style.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="<?php echo e(url('')); ?>/assets/dashboard/style2.css"
    />


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <style>
      .files-wrapper {
        display: flex;
        flex-direction: column;
        line-height: 29px;
      }
      .files-item {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        line-height: 29px;
      }
      .files-item:last-child {
        margin-bottom: 0px;
      }
      .files-loader {
        margin: 0 0.2em 0 0;
        padding: 0;
        line-height: 0;
        vertical-align: middle;
        font-size: 24px;
        display: flex;
        align-items: center;
        min-height: 29px;
      }
      .files-loader__svg {
        display: block;
        width: 1em;
        height: 1em;
        fill: transparent;
        transform: rotate(180deg);
        margin: 0px 8px;
      }
      .files-loader__svg-circle {
        fill: transparent;
      }
      .files-loader__svg-progress {
        transition: all 0.4s;
      }
    </style>

  </head>
  <body class="body body-internal">
    <div class="wrapper wrapper-sidebar-navbar">
      <div id="block_50" class="component_private_navbar">
        <span class="component_private_navbar">
          <div
            class="component-navbar-private__wrapper component_private_sidebar"
          >
            <div
              class="sidebar-block__top component-navbar component-navbar__navbar-private editor__component-wrapper"
            >
              <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="navbar-private__header">
                    <div class="sidebar-block__top-brand">
                      <div class="component-navbar-brand component-navbar-public-brand">
                          <a href="/user/dashboard">
                      <img src="<?php echo e(url('')); ?>/assets/pax/logo.svg" alt="logo">
                     </a>
                      </div>
                    </div>
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbar-collapse-50"
                      aria-controls="navbar-collapse-50"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-burger">
                        <span class="navbar-burger-line"></span>
                      </span>
                    </button>
                  </div>
                  <div class="collapse navbar-collapse" id="navbar-collapse-50">
                    <div class="component-navbar-collapse-divider"></div>
                    <div class="d-flex component-navbar-collapse">
                      <ul class="navbar-nav navbar-nav-sidebar-menu">
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private component-navbar-nav-link-active__navbar-private"
                            href="/user/dashboard"
                          >
                            New order
                          </a>
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="/user/service"
                          >
                            Services
                          </a>
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="/user/order/history"
                          >
                            Orders
                          </a>
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="/user/deposit"
                          >
                           Add Funds
                          </a>
                        </li>

                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="/user/api/index"
                          >
                            API
                          </a>
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="#"
                          >
                            Affiliates
                          </a>
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="#"
                          >
                            Child panel
                          </a>
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="#"
                          >
                           Tickets
                          </a>
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="/user/order/mass"
                          >
                            Mass Orders
                          </a>
                        </li>
                      </ul>
                      <ul class="navbar-nav navbar-nav-currencies">
                        <div
                          class="balance-dropdown-container component_balance_dropdown"
                        >
                          <div class="balance-dropdown">
                            <div
                              class="balance-dropdown__name"
                              data-toggle="dropdown"
                              data-hover="dropdown"
                              aria-expanded="false"
                            >
                              NGN <?php echo e(number_format(Auth::user()->balance, 2)); ?>


                            </div>
                          </div>
                        </div>
                      </ul>
                      <ul class="navbar-nav">
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="/user/profile-setting"
                            >Account</a
                          >
                        </li>
                        <li
                          class="nav-item component-navbar-nav-item component-navbar-private-nav-item"
                        >
                          <a
                            class="component-navbar-nav-link component-navbar-nav-link__navbar-private"
                            href="/user/logout"
                            >Logout</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </span>
        <span class="component_private_sidebar">
          <div class="component-sidebar_wrapper">
            <div style=""
              class="sidebar-block__left component-sidebar component-sidebar-with-navbar component_private_navbar editor__component-wrapper"
            >
              <div class="component-sidebar__menu">
                <div class="component-sidebar__menu-logo">
                  <div
                    class="component-navbar-brand component-sidebar__menu-brand"
                  >
                  <img src="<?php echo e(url('')); ?>/assets/pax/logo.svg" alt="logo">

                  </div>
                </div>

                <ul class="sidebar-block__left-menu editor__component-wrapper">
                  <li
                    class="component-sidebar__menu-item component-sidebar__menu-item-active"
                  >
                    <a
                      class="component-sidebar__menu-item-link"
                      href="/user/dashboard"
                    >
                      New order
                    </a>
                  </li>
                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="/user/service"
                    >
                      Services
                    </a>
                  </li>
                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="/user/order/history"
                    >
                      Orders
                    </a>
                  </li>

                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="/user/deposit"
                    >
                      Add funds
                    </a>
                  </li>
                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="/user/api/index"
                    >
                      API
                    </a>
                  </li>
                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="#"
                    >
                      Affiliates
                    </a>
                  </li>
                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="#"
                    >
                    Child panel
                    </a>
                  </li>
                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="#"
                    >
                    Tickets
                    </a>
                  </li>
                  <li class="component-sidebar__menu-item">
                    <a
                      class="component-sidebar__menu-item-link"
                      href="/user/order/mass"
                    >
                    Mass order
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </span>
      </div>

      <?php echo $__env->yieldContent('content'); ?>

      <script
      type="text/javascript"
      src="<?php echo e(url('')); ?>/assets/dashboard/js1.js"
    ></script>
    <script
      type="text/javascript"
      src="<?php echo e(url('')); ?>/assets/dashboard/js2.js"
    ></script>
    <script
      type="text/javascript"
      src="<?php echo e(url('')); ?>/assets/dashboard/js3.js"
    ></script>



  </script>

  <script>

  </script>



        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <a style="color: white" href=" https://chat.whatsapp.com/E6cxlJmfLrK6Q7oly0hdKc" class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
        </a>












  <template id="auto-clicker-autofill-popup"></template>
  <template id="auto-clicker-autofill-popup-tr"></template>

</body>
</html>
<?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/layout/dashboard.blade.php ENDPATH**/ ?>