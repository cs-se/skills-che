/* @ds-bundle: {"format":3,"namespace":"DesignSystemForLoFiPrototyping_7410c5","components":[],"sourceHashes":{"ui_kits/mobile_app/CartScreen.jsx":"ab1e1751810e","ui_kits/mobile_app/HomeScreen.jsx":"5535c8442493","ui_kits/mobile_app/StoreScreen.jsx":"30f4c0749caa","ui_kits/mobile_app/components.jsx":"0dc17180501f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystemForLoFiPrototyping_7410c5 = window.DesignSystemForLoFiPrototyping_7410c5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/mobile_app/CartScreen.jsx
try { (() => {
// Snoonu Mobile — Cart, Checkout & Order Tracking Screens
// Requires components.jsx to be loaded first

function CartScreen({
  onNavigate,
  cartCount,
  setCartCount
}) {
  const [voucher, setVoucher] = React.useState('');
  const [voucherApplied, setVoucherApplied] = React.useState(false);
  const [payMethod, setPayMethod] = React.useState('card');
  const items = [{
    id: 1,
    name: 'Classic Smash Burger',
    mods: 'No pickles',
    price: 38,
    qty: 1
  }, {
    id: 2,
    name: 'Truffle Parmesan Fries',
    mods: null,
    price: 22,
    qty: 2
  }, {
    id: 3,
    name: 'Vanilla Shake',
    mods: null,
    price: 20,
    qty: 1
  }];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = 0; // Free
  const voucherDisc = voucherApplied ? 10 : 0;
  const total = subtotal + delivery - voucherDisc;
  const payMethods = [{
    id: 'card',
    label: 'Credit Card',
    icon: '💳'
  }, {
    id: 'apple',
    label: 'Apple Pay',
    icon: '🍎'
  }, {
    id: 'cash',
    label: 'Cash',
    icon: '💵'
  }, {
    id: 'wallet',
    label: 'Snoonu Wallet',
    icon: '👜'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: SNOONU.bgApp
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
    title: "My Cart",
    onBack: () => onNavigate('store'),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: SNOONU.brand,
        fontFamily: SNOONU.font,
        cursor: 'pointer'
      }
    }, "Clear all")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      margin: '8px 0 6px',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IcLocation, {
    color: SNOONU.brand,
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, "Deliver to Home"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      marginTop: 2
    }
  }, "Al Nasr Tower A, Al Markhiya St, Doha"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: SNOONU.brand,
      fontFamily: SNOONU.font,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, "Change")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      background: SNOONU.bgApp,
      borderRadius: 10,
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IcClock, {
    size: 16,
    color: SNOONU.fg3
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, "Today, within 35 min"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      marginLeft: 8
    }
  }, "Tap to schedule")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 0',
      fontSize: 16,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, "Order from Boardwalk Burgers"), items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: SNOONU.bgApp,
      borderRadius: 100,
      padding: '4px 8px',
      border: `1px solid ${SNOONU.border}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCartCount(c => Math.max(0, c - 1)),
    style: {
      width: 24,
      height: 24,
      background: SNOONU.brand,
      border: 'none',
      borderRadius: '50%',
      color: '#fff',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: SNOONU.font
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      minWidth: 16,
      textAlign: 'center',
      fontFamily: SNOONU.font
    }
  }, item.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCartCount(c => c + 1),
    style: {
      width: 24,
      height: 24,
      background: SNOONU.brand,
      border: 'none',
      borderRadius: '50%',
      color: '#fff',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: SNOONU.font
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, item.name), item.mods && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      marginTop: 2
    }
  }, item.mods)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      flexShrink: 0
    }
  }, item.price * item.qty, " QR")), i < items.length - 1 && /*#__PURE__*/React.createElement(Divider, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: `1.5px dashed ${SNOONU.border}`,
      borderRadius: 12,
      width: '100%',
      padding: '11px',
      fontSize: 14,
      fontWeight: 600,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      cursor: 'pointer'
    }
  }, "+ Add special request"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      marginBottom: 6,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 10
    }
  }, "Add Voucher"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: voucher,
    onChange: e => {
      setVoucher(e.target.value);
      setVoucherApplied(false);
    },
    placeholder: "Enter voucher code",
    style: {
      flex: 1,
      border: `1.5px solid ${voucherApplied ? SNOONU.success : SNOONU.border}`,
      borderRadius: 12,
      height: 48,
      padding: '0 14px',
      fontSize: 15,
      fontFamily: SNOONU.font,
      outline: 'none',
      color: SNOONU.fg1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => voucher && setVoucherApplied(true),
    style: {
      background: voucher ? SNOONU.brand : SNOONU.bgApp,
      color: voucher ? '#fff' : SNOONU.disabled,
      border: 'none',
      borderRadius: 12,
      padding: '0 20px',
      fontSize: 15,
      fontWeight: 700,
      fontFamily: SNOONU.font,
      cursor: voucher ? 'pointer' : 'default'
    }
  }, "Apply")), voucherApplied && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: SNOONU.success,
      fontWeight: 600,
      fontFamily: SNOONU.font
    }
  }, "\u2713 Voucher applied \u2014 10 QR discount")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      marginBottom: 6,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 10
    }
  }, "Pay with"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, payMethods.map(pm => /*#__PURE__*/React.createElement("div", {
    key: pm.id,
    onClick: () => setPayMethod(pm.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 14px',
      background: payMethod === pm.id ? SNOONU.brandLight : SNOONU.bgApp,
      border: `1.5px solid ${payMethod === pm.id ? SNOONU.brand : SNOONU.border}`,
      borderRadius: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, pm.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 600,
      fontFamily: SNOONU.font,
      color: SNOONU.fg1
    }
  }, pm.label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `2px solid ${payMethod === pm.id ? SNOONU.brand : SNOONU.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, payMethod === pm.id && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: SNOONU.brand
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      marginBottom: 6,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 12
    }
  }, "Order Summary"), [{
    label: 'Items',
    value: `${subtotal} QR`
  }, {
    label: 'Delivery fee',
    value: delivery === 0 ? 'Free' : `${delivery} QR`,
    green: delivery === 0
  }, voucherApplied && {
    label: 'Voucher discount',
    value: `−${voucherDisc} QR`,
    green: true
  }].filter(Boolean).map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, row.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: row.green ? SNOONU.success : SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, row.value))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: SNOONU.border,
      margin: '10px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, total, " QR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      marginBottom: 6,
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, "Secure payment \u2014 your data is protected")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 24px',
      background: '#fff',
      borderTop: `1px solid ${SNOONU.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      textAlign: 'center',
      marginBottom: 10
    }
  }, "By confirming your order, you agree to the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: SNOONU.brand,
      fontWeight: 600
    }
  }, "Terms & Conditions")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('tracking'),
    style: {
      width: '100%',
      background: SNOONU.brand,
      color: '#fff',
      border: 'none',
      borderRadius: 100,
      height: 56,
      fontSize: 17,
      fontWeight: 700,
      fontFamily: SNOONU.font,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, "Place Order \xB7 ", total, " QR")));
}
function TrackingScreen({
  onNavigate
}) {
  const [status, setStatus] = React.useState(1);
  const steps = [{
    id: 0,
    label: 'Placed',
    desc: 'Your order has been placed',
    icon: '📋'
  }, {
    id: 1,
    label: 'Confirmed',
    desc: 'Restaurant is preparing your order',
    icon: '🍳'
  }, {
    id: 2,
    label: 'Picked up',
    desc: 'Driver is on the way',
    icon: '🛵'
  }, {
    id: 3,
    label: 'Delivered',
    desc: 'Enjoy your meal!',
    icon: '🎉'
  }];
  React.useEffect(() => {
    const interval = setInterval(() => setStatus(s => s < 3 ? s + 1 : s), 4000);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: SNOONU.bgApp
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(NavBar, {
    title: "Order Tracking",
    onBack: () => onNavigate('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: 'linear-gradient(135deg, #E8F4E8 0%, #D4E8D4 50%, #C8DCC8 100%)',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: i * 50 + 10,
      height: 1,
      background: 'rgba(0,0,0,0.06)'
    }
  })), [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: i * 65 + 10,
      width: 1,
      background: 'rgba(0,0,0,0.06)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 90,
      left: 0,
      right: 0,
      height: 18,
      background: 'rgba(255,255,255,0.6)',
      borderTop: '1px solid rgba(255,255,255,0.8)',
      borderBottom: '1px solid rgba(255,255,255,0.8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 140,
      top: 0,
      bottom: 0,
      width: 18,
      background: 'rgba(255,255,255,0.6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: 60,
      width: 36,
      height: 36,
      background: SNOONU.brand,
      borderRadius: '50% 50% 50% 0',
      transform: 'rotate(-45deg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 3px 10px rgba(217,2,23,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(45deg)',
      color: '#fff',
      fontSize: 16
    }
  }, "\uD83D\uDCCD")), status >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 70,
      left: 180,
      width: 40,
      height: 40,
      background: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      fontSize: 22
    }
  }, "\uD83D\uDEF5"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      background: '#fff',
      borderRadius: 12,
      padding: '8px 14px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, "Estimated arrival"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginTop: 2
    }
  }, "~25 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, "Delays are possible"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '20px 16px',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 16
    }
  }, "Order Status"), steps.map((step, i) => /*#__PURE__*/React.createElement("div", {
    key: step.id,
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: i < steps.length - 1 ? 0 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: i <= status ? SNOONU.brand : SNOONU.bgApp,
      border: `2px solid ${i <= status ? SNOONU.brand : SNOONU.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: i <= status ? 16 : 14,
      transition: 'all 0.4s ease',
      flexShrink: 0
    }
  }, i <= status ? '✓' : /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, step.icon)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      height: 28,
      background: i < status ? SNOONU.brand : SNOONU.border,
      transition: 'background 0.4s ease',
      marginTop: 2,
      marginBottom: 2,
      borderRadius: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6,
      paddingBottom: i < steps.length - 1 ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: i === status ? 700 : 500,
      color: i <= status ? SNOONU.fg1 : SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, step.label), i === status && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      marginTop: 2
    }
  }, step.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '16px',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 12
    }
  }, "Order Details"), [{
    label: 'Classic Smash Burger ×1',
    val: '38 QR'
  }, {
    label: 'Truffle Parmesan Fries ×2',
    val: '44 QR'
  }, {
    label: 'Vanilla Shake ×1',
    val: '20 QR'
  }, {
    label: 'Delivery',
    val: 'Free',
    green: true
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, row.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: row.green ? SNOONU.success : SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, row.val))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: SNOONU.border,
      margin: '10px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      fontFamily: SNOONU.font
    }
  }, "Total Paid"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: SNOONU.brand,
      fontFamily: SNOONU.font
    }
  }, "102 QR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 24px',
      background: '#fff',
      borderTop: `1px solid ${SNOONU.border}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      width: '100%',
      background: SNOONU.bgApp,
      color: SNOONU.fg1,
      border: `1.5px solid ${SNOONU.border}`,
      borderRadius: 100,
      height: 52,
      fontSize: 16,
      fontWeight: 600,
      fontFamily: SNOONU.font,
      cursor: 'pointer'
    }
  }, "Back to Home")));
}
Object.assign(window, {
  CartScreen,
  TrackingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/HomeScreen.jsx
try { (() => {
// Snoonu Mobile — Home Screen
// Requires components.jsx to be loaded first

function HomeScreen({
  onNavigate,
  cartCount,
  setCartCount
}) {
  const [favs, setFavs] = React.useState({});
  const toggleFav = id => setFavs(f => ({
    ...f,
    [id]: !f[id]
  }));
  const categories = [{
    id: 'food',
    label: 'Restaurants',
    bg: '#FFE7E6',
    glyph: '🍔'
  }, {
    id: 'snoomart',
    label: 'Snoomart',
    bg: '#E6F8EE',
    glyph: '🛒',
    badge: '24/7'
  }, {
    id: 'grocery',
    label: 'Grocery',
    bg: '#F0FDF4',
    glyph: '🥬',
    badge: '24/7'
  }, {
    id: 'marketplace',
    label: 'Marketplace',
    bg: '#EBF3FF',
    glyph: '📱'
  }, {
    id: 'flowers',
    label: 'Flowers & Gifts',
    bg: '#FFF0F7',
    glyph: '💐'
  }, {
    id: 'pharmacy',
    label: 'Pharmacy',
    bg: '#F4E6FF',
    glyph: '💊'
  }, {
    id: 'snoosend',
    label: 'Snoosend',
    bg: '#FFF9E6',
    glyph: '📦'
  }, {
    id: 'scity',
    label: 'S City',
    bg: '#E6EAFF',
    glyph: '🎭'
  }];
  const subcats = [{
    label: 'Indoor & Outdoor Sports',
    bg: '#FFE7E6',
    glyph: '🏀'
  }, {
    label: 'Beauty Devices',
    bg: '#FFF0F7',
    glyph: '💅'
  }, {
    label: 'Home Decor',
    bg: '#FFF9E6',
    glyph: '🪴'
  }, {
    label: 'Fitness',
    bg: '#F0FDF4',
    glyph: '🏋️'
  }, {
    label: 'Wearable Gadgets',
    bg: '#E6EAFF',
    glyph: '⌚'
  }, {
    label: 'Electronics',
    bg: '#EBF3FF',
    glyph: '💻'
  }];
  const products = [{
    id: 'p1',
    name: 'Natural Body Brush Massage Tool',
    price: 25,
    oldPrice: 35,
    discount: '−30%',
    bg: '#F0F0EE'
  }, {
    id: 'p2',
    name: 'Tomatoes Cherry Plum Holland 250G',
    price: 12,
    bg: '#F5F2EE'
  }, {
    id: 'p3',
    name: 'Apple MacBook Air 13 i5 8GB 128GB',
    price: 175,
    oldPrice: 250,
    discount: '−30%',
    bg: '#EEEEF5'
  }, {
    id: 'p4',
    name: 'Korean Beauty Face Serum 30ml',
    price: 38,
    bg: '#FFF0F7'
  }];
  const restaurants = [{
    id: 'r1',
    name: 'Boardwalk Burgers and Fries',
    cuisine: 'Fast Food · Burgers · Fried Chicken',
    rating: 4.7,
    time: '35 min',
    delivery: 'Free',
    bg: ['#2C1810', '#5C2A10'],
    splus: true
  }, {
    id: 'r2',
    name: 'Korean Beauty Kitchen',
    cuisine: 'Korean · Asian · Bowls',
    rating: 4.5,
    time: '20 min',
    delivery: '5 QR',
    bg: ['#0d1a2a', '#1a3a2a'],
    splus: false
  }, {
    id: 'r3',
    name: 'Boardwalk Burgers and Fries',
    cuisine: 'French · European · Sandwiches',
    rating: 4.8,
    time: '25 min',
    delivery: 'Free',
    bg: ['#1a1030', '#2d1a4a'],
    splus: true
  }];
  const addToCart = e => {
    e.stopPropagation();
    setCartCount(c => c + 1);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: SNOONU.bgApp
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '8px 16px 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      marginBottom: 2
    }
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      letterSpacing: '-0.18px'
    }
  }, "Al Nasr Tower A, Doha"), /*#__PURE__*/React.createElement(IcChevron, {
    dir: "down",
    color: SNOONU.fg1,
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: SNOONU.brand,
      borderRadius: 10,
      padding: '5px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff',
      fontFamily: SNOONU.font
    }
  }, "Ruby")), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('cart'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IcCart, {
    color: SNOONU.fg1,
    size: 26,
    badge: cartCount
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(SearchBar, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '0 16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F0EEF8',
      borderRadius: 28,
      height: 134,
      padding: '20px 20px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#000',
      fontFamily: SNOONU.font,
      letterSpacing: '-0.47px',
      lineHeight: '32px',
      zIndex: 1
    }
  }, "Cool in", /*#__PURE__*/React.createElement("br", null), "School"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#000',
      fontFamily: SNOONU.font,
      marginTop: 4,
      zIndex: 1
    }
  }, "A perfect balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -10,
      top: -20,
      width: 160,
      height: 160,
      borderRadius: '50%',
      background: 'rgba(130,100,200,0.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 20,
      top: 10,
      width: 100,
      height: 114,
      background: 'rgba(100,80,180,0.08)',
      borderRadius: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 5,
      marginTop: 10
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i === 0 ? 16 : 5,
      height: 5,
      borderRadius: 100,
      background: i === 0 ? SNOONU.fg1 : SNOONU.border
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '0 16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '12px 8px'
    }
  }, categories.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat.id,
    onClick: () => cat.id === 'food' && onNavigate('store'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: cat.bg,
      borderRadius: 16,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 28
    }
  }, cat.glyph), cat.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -5,
      right: -2,
      background: SNOONU.success,
      color: '#fff',
      fontSize: 8,
      fontWeight: 700,
      borderRadius: 100,
      padding: '2px 5px',
      fontFamily: SNOONU.font
    }
  }, cat.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      textAlign: 'center',
      lineHeight: '14px'
    }
  }, cat.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Label",
    onSeeAll: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      padding: '0 16px 16px',
      WebkitOverflowScrolling: 'touch'
    }
  }, subcats.map((sc, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: sc.bg,
      borderRadius: 100,
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26
    }
  }, sc.glyph), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      textAlign: 'center',
      maxWidth: 68,
      lineHeight: '14px'
    }
  }, sc.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Top Picks",
    onSeeAll: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      padding: '0 16px 16px',
      WebkitOverflowScrolling: 'touch'
    }
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onNavigate('product', p),
    style: {
      flexShrink: 0,
      width: 150,
      background: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px solid ${SNOONU.border}`,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      background: p.bg,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      height: 70,
      background: 'rgba(0,0,0,0.06)',
      borderRadius: 10
    }
  }), p.discount && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      background: SNOONU.brand,
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      borderRadius: 6,
      padding: '2px 6px',
      fontFamily: SNOONU.font
    }
  }, p.discount), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      toggleFav(p.id);
    },
    style: {
      position: 'absolute',
      top: 7,
      right: 7,
      width: 26,
      height: 26,
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IcHeart, {
    filled: favs[p.id],
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      lineHeight: '16px',
      marginBottom: 6,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: SNOONU.brand,
      fontFamily: SNOONU.font
    }
  }, p.price, " QR"), p.oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: SNOONU.disabled,
      fontFamily: SNOONU.font,
      textDecoration: 'line-through',
      marginLeft: 4
    }
  }, p.oldPrice)), /*#__PURE__*/React.createElement("button", {
    onClick: addToCart,
    style: {
      background: SNOONU.brand,
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: 28,
      height: 28,
      fontSize: 20,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0,
      fontFamily: SNOONU.font
    }
  }, "+"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Restaurants",
    onSeeAll: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '0 16px 16px'
    }
  }, restaurants.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => onNavigate('store'),
    style: {
      background: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px solid ${SNOONU.border}`,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: `linear-gradient(135deg, ${r.bg[0]}, ${r.bg[1]})`,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 10
    }
  }, r.splus && /*#__PURE__*/React.createElement(SplusBadge, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      toggleFav(r.id);
    },
    style: {
      width: 30,
      height: 30,
      background: 'rgba(0,0,0,0.4)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IcHeart, {
    filled: favs[r.id],
    color: "#fff",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 3,
      letterSpacing: '-0.1px'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      marginBottom: 8
    }
  }, r.cuisine), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(IcStar2, {
    filled: true,
    size: 13,
    color: "#FFDA0A"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      fontFamily: SNOONU.font
    }
  }, r.rating)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: SNOONU.border
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IcClock, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, r.time)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: SNOONU.border
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: r.delivery === 'Free' ? SNOONU.success : SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, r.delivery === 'Free' ? '🛵 Free' : `🛵 ${r.delivery}`))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  })), /*#__PURE__*/React.createElement(BottomNav, {
    active: "home",
    onNavigate: t => t === 'home' ? null : null,
    cartCount: cartCount
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/StoreScreen.jsx
try { (() => {
// Snoonu Mobile — Store Listing + Product Detail Screens
// Requires components.jsx to be loaded first

function StoreScreen({
  onNavigate,
  cartCount,
  setCartCount
}) {
  const [activeTab, setActiveTab] = React.useState('All');
  const tabs = ['All', 'Burgers', 'Sides', 'Drinks', 'Desserts'];
  const menuItems = [{
    id: 'm1',
    name: 'Classic Smash Burger',
    desc: 'Double smash patty, special sauce, pickles, cheddar cheese, brioche bun',
    price: 38,
    cal: '620 kcal',
    popular: true
  }, {
    id: 'm2',
    name: 'BBQ Bacon Burger',
    desc: 'Wagyu beef, crispy bacon, BBQ sauce, caramelised onions',
    price: 45,
    cal: '720 kcal'
  }, {
    id: 'm3',
    name: 'Crispy Chicken Sandwich',
    desc: 'Buttermilk fried chicken thigh, coleslaw, pickles, brioche bun',
    price: 35,
    cal: '580 kcal',
    popular: true
  }, {
    id: 'm4',
    name: 'Truffle Parmesan Fries',
    desc: 'Hand-cut fries, truffle oil, parmesan, herbs',
    price: 22,
    cal: '390 kcal'
  }, {
    id: 'm5',
    name: 'Onion Rings',
    desc: 'Beer-battered rings with dipping sauce',
    price: 18,
    cal: '340 kcal'
  }, {
    id: 'm6',
    name: 'Vanilla Shake',
    desc: 'Thick and creamy vanilla milkshake',
    price: 20,
    cal: '480 kcal'
  }];
  const addItem = (e, item) => {
    e.stopPropagation();
    setCartCount(c => c + 1);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: SNOONU.bgApp
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(135deg, #2C1810, #5C2A10)',
      height: 180,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('home'),
    style: {
      width: 36,
      height: 36,
      background: 'rgba(0,0,0,0.45)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IcBack, {
    color: "#fff",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      background: 'rgba(0,0,0,0.45)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IcHeart, {
    color: "#fff",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('cart'),
    style: {
      width: 36,
      height: 36,
      background: 'rgba(0,0,0,0.45)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IcCart, {
    color: "#fff",
    size: 20,
    badge: cartCount
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '12px 16px',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(SplusBadge, null), /*#__PURE__*/React.createElement(Badge, {
    bg: "#FFE7E6",
    color: SNOONU.brand
  }, "Ad")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '14px 16px 0',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      letterSpacing: '-0.33px'
    }
  }, "Boardwalk Burgers and Fries"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      marginTop: 3
    }
  }, "Fast Food \xB7 Burgers \xB7 Fried Chicken")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: SNOONU.bgApp,
      border: `1px solid ${SNOONU.border}`,
      borderRadius: 100,
      padding: '6px 14px',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: SNOONU.font,
      color: SNOONU.fg1,
      cursor: 'pointer'
    }
  }, "Info")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      paddingBottom: 14,
      borderBottom: `1px solid ${SNOONU.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IcStar2, {
    filled: true,
    size: 14,
    color: "#FFDA0A"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      fontFamily: SNOONU.font
    }
  }, "4.7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, "(240+)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IcClock, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font
    }
  }, "35 min")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IcMoto, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: SNOONU.success,
      fontFamily: SNOONU.font
    }
  }, "Free Delivery"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '12px 0',
      WebkitOverflowScrolling: 'touch'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setActiveTab(t),
    style: {
      flexShrink: 0,
      background: activeTab === t ? SNOONU.brand : SNOONU.bgApp,
      color: activeTab === t ? '#fff' : SNOONU.fg1,
      border: activeTab === t ? 'none' : `1px solid ${SNOONU.border}`,
      borderRadius: 100,
      padding: '7px 16px',
      fontSize: 14,
      fontWeight: 600,
      fontFamily: SNOONU.font,
      cursor: 'pointer'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: '#fff'
    }
  }, menuItems.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.id
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('product', item),
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 12,
      background: ['#F5EEE8', '#F0EEF5', '#EEF5EE', '#F5F0EE', '#EEF0F5', '#F5EEF0'][i % 6],
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      background: 'rgba(0,0,0,0.06)',
      borderRadius: 8
    }
  }), item.popular && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: SNOONU.brand,
      color: '#fff',
      fontSize: 9,
      fontWeight: 700,
      textAlign: 'center',
      padding: '2px 0',
      fontFamily: SNOONU.font
    }
  }, "Best Seller")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 4,
      letterSpacing: '-0.1px'
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: SNOONU.fg3,
      fontFamily: SNOONU.font,
      lineHeight: '17px',
      marginBottom: 8,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font
    }
  }, item.price, " QR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: SNOONU.disabled,
      fontFamily: SNOONU.font,
      marginLeft: 6
    }
  }, item.cal)), /*#__PURE__*/React.createElement("button", {
    onClick: e => addItem(e, item),
    style: {
      background: SNOONU.brand,
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: 32,
      height: 32,
      fontSize: 22,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontFamily: SNOONU.font
    }
  }, "+")))), i < menuItems.length - 1 && /*#__PURE__*/React.createElement(Divider, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  })), cartCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 20px',
      background: '#fff',
      borderTop: `1px solid ${SNOONU.border}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('cart'),
    style: {
      width: '100%',
      background: SNOONU.brand,
      color: '#fff',
      border: 'none',
      borderRadius: 100,
      height: 56,
      fontSize: 16,
      fontWeight: 700,
      fontFamily: SNOONU.font,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'rgba(255,255,255,0.25)',
      borderRadius: 8,
      padding: '2px 10px',
      fontSize: 15,
      fontWeight: 700
    }
  }, cartCount), /*#__PURE__*/React.createElement("span", null, "Go to Checkout"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "\u2192"))));
}

// Product detail screen (modal-style)
function ProductScreen({
  product,
  onBack,
  onAddToCart
}) {
  const [qty, setQty] = React.useState(1);
  const [selected, setSelected] = React.useState(null);
  const options = ['No pickles', 'Extra sauce', 'No onions', 'Extra cheese'];
  const item = product || {
    name: 'Classic Smash Burger',
    desc: 'Double smash patty, special sauce, pickles, cheddar cheese, on a toasted brioche bun. Served with a side of seasoned fries.',
    price: 38,
    cal: '620 kcal'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    bg: SNOONU.bgApp
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 260,
      background: `linear-gradient(135deg, #F5EEE8, #EDE4D8)`,
      position: 'relative',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 160,
      background: 'rgba(0,0,0,0.06)',
      borderRadius: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 12,
      left: 16,
      width: 36,
      height: 36,
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IcBack, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 16,
      width: 36,
      height: 36,
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IcHeart, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      letterSpacing: '-0.4px',
      marginBottom: 6
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: SNOONU.brand,
      fontFamily: SNOONU.font
    }
  }, item.price, " QR"), item.cal && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: SNOONU.disabled,
      fontFamily: SNOONU.font
    }
  }, item.cal)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: SNOONU.fg2,
      fontFamily: SNOONU.font,
      lineHeight: '20px',
      marginBottom: 20
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      marginBottom: 12
    }
  }, "Special Requests"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setSelected(selected === o ? null : o),
    style: {
      background: selected === o ? SNOONU.brandLight : SNOONU.bgApp,
      color: selected === o ? SNOONU.brand : SNOONU.fg1,
      border: `1.5px solid ${selected === o ? SNOONU.brand : SNOONU.border}`,
      borderRadius: 100,
      padding: '7px 14px',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: SNOONU.font,
      cursor: 'pointer'
    }
  }, o))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 24px',
      background: '#fff',
      borderTop: `1px solid ${SNOONU.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      background: SNOONU.bgApp,
      borderRadius: 100,
      border: `1px solid ${SNOONU.border}`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => Math.max(1, q - 1)),
    style: {
      width: 44,
      height: 52,
      background: 'none',
      border: 'none',
      fontSize: 22,
      color: SNOONU.brand,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: SNOONU.font
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: SNOONU.font
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => q + 1),
    style: {
      width: 44,
      height: 52,
      background: 'none',
      border: 'none',
      fontSize: 22,
      color: SNOONU.brand,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: SNOONU.font
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onAddToCart(qty),
    style: {
      flex: 1,
      background: SNOONU.brand,
      color: '#fff',
      border: 'none',
      borderRadius: 100,
      height: 52,
      fontSize: 16,
      fontWeight: 700,
      fontFamily: SNOONU.font,
      cursor: 'pointer'
    }
  }, "Add to cart \u2014 ", item.price * qty, " QR"))));
}
Object.assign(window, {
  StoreScreen,
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/StoreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Snoonu Mobile UI Kit — Shared Components
// All components exported to window for cross-file use in index.html

const SNOONU = {
  brand: '#D90217',
  brandLight: '#FFE7E6',
  bgApp: '#F5F5F5',
  surface: '#FFFFFF',
  fg1: '#000000',
  fg2: '#75757E',
  fg3: '#717171',
  disabled: '#B4B4B4',
  border: '#E0E0E0',
  success: '#22C55E',
  warning: '#FFDA0A',
  error: '#FF5C5F',
  splusGrad: 'linear-gradient(135deg,#FF5AC8,#FF5078,#FF8C28)',
  font: "'Inter', -apple-system, sans-serif"
};

/* ── Icon System (inline SVG paths) ──────────────────── */
function Ic({
  d,
  size = 24,
  color = SNOONU.fg1,
  filled = false,
  viewBox = "0 0 24 24",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: viewBox,
    fill: filled ? color : 'none',
    stroke: filled ? 'none' : color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), Array.isArray(d) ? d.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })) : /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
function IcHome({
  active,
  size = 24
}) {
  const c = active ? SNOONU.brand : SNOONU.disabled;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: active ? SNOONU.brand : 'none',
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"
  }), active ? /*#__PURE__*/React.createElement("path", {
    d: "M9 21V12h6v9",
    fill: "white",
    stroke: "none"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M9 21V12h6v9"
  }));
}
function IcBag({
  active,
  size = 24
}) {
  const c = active ? SNOONU.brand : SNOONU.disabled;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: active ? c : 'none',
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }));
}
function IcGrid({
  active,
  size = 24
}) {
  const c = active ? SNOONU.brand : SNOONU.disabled;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: c,
    stroke: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5",
    opacity: active ? 1 : 0.4
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5",
    opacity: active ? 1 : 0.4
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  }));
}
function IcStar({
  active,
  size = 24
}) {
  const c = active ? SNOONU.brand : SNOONU.disabled;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: active ? c : 'none',
    stroke: c,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
}
function IcUser({
  active,
  size = 24
}) {
  const c = active ? SNOONU.brand : SNOONU.disabled;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: active ? c : 'none',
    stroke: c,
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
}
function IcSearch({
  color = SNOONU.fg3,
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }));
}
function IcBack({
  color = SNOONU.fg1,
  size = 24
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
}
function IcHeart({
  filled = false,
  color = SNOONU.fg3,
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? '#FF5C5F' : 'none',
    stroke: filled ? '#FF5C5F' : color,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
}
function IcCart({
  color = SNOONU.fg1,
  size = 24,
  badge = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
  })), badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -6,
      background: SNOONU.brand,
      color: '#fff',
      fontSize: 9,
      fontWeight: 700,
      width: 16,
      height: 16,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: SNOONU.font
    }
  }, badge));
}
function IcChevron({
  dir = 'down',
  color = SNOONU.fg2,
  size = 16
}) {
  const rot = {
    down: 0,
    up: 180,
    right: -90,
    left: 90
  }[dir] || 0;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    style: {
      transform: `rotate(${rot}deg)`
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
}
function IcClock({
  color = SNOONU.fg3,
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }));
}
function IcLocation({
  color = SNOONU.fg1,
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
}
function IcMoto({
  color = SNOONU.fg3,
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.7",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "17.5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18.5",
    cy: "17.5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 6h-3l-3 8h9l-3-8zM8 17.5H3l3-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6l2 4"
  }));
}
function IcStar2({
  filled = false,
  color = '#FFDA0A',
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : 'none',
    stroke: color,
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
}

/* ── Core Components ─────────────────────────────────── */
function StatusBar({
  bg = '#fff',
  dark = true
}) {
  const c = dark ? '#000' : '#fff';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      background: bg,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '0 22px 8px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: c,
      letterSpacing: '-0.3px',
      fontFamily: SNOONU.font
    }
  }, "5:13"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: c
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "4",
    width: "3",
    height: "8",
    rx: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "2.5",
    width: "3",
    height: "9.5",
    rx: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "0",
    width: "3",
    height: "12",
    rx: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "12",
    rx: "0.5",
    opacity: "0.3"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2.5C5.4 2.5 3.1 3.6 1.5 5.3L0 4C2 1.7 4.8.5 8 .5s6 1.2 8 3.5L14.5 5.3C12.9 3.6 10.6 2.5 8 2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6C6.2 6 4.6 6.7 3.4 7.8L2 6.5C3.6 5.1 5.7 4.2 8 4.2s4.4.9 6 2.3L12.6 7.8C11.4 6.7 9.8 6 8 6z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "10.5",
    r: "1.5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "13",
    viewBox: "0 0 26 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.6",
    y: "0.6",
    width: "22",
    height: "11.8",
    rx: "2.8",
    stroke: c,
    strokeWidth: "1.2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "17",
    height: "9",
    rx: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.5 5v3a1.5 1.5 0 0 0 0-3z",
    fill: c
  }))));
}
function BottomNav({
  active = 'home',
  onNavigate,
  cartCount = 0
}) {
  const tabs = [{
    id: 'home',
    label: 'Food',
    Icon: IcHome
  }, {
    id: 'grocery',
    label: 'Grocery',
    Icon: IcBag
  }, {
    id: 'marketplace',
    label: 'Marketplace',
    Icon: IcGrid
  }, {
    id: 'loyalty',
    label: 'Royal Club',
    Icon: IcStar
  }, {
    id: 'profile',
    label: 'Profile',
    Icon: IcUser
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 84,
      background: '#fff',
      borderTop: `1px solid #F0F0F0`,
      display: 'flex',
      flexShrink: 0
    }
  }, tabs.map(({
    id,
    label,
    Icon
  }) => /*#__PURE__*/React.createElement("div", {
    key: id,
    onClick: () => onNavigate(id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 10,
      gap: 3,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    active: active === id,
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      fontFamily: SNOONU.font,
      color: active === id ? SNOONU.brand : SNOONU.disabled
    }
  }, label), active === id && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: SNOONU.brand,
      marginTop: 1
    }
  }))));
}
function SearchBar({
  placeholder = 'Search for stores',
  value = '',
  onChange,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      margin: '0 16px',
      background: '#EBEBEB',
      borderRadius: 12,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      padding: '0 14px',
      gap: 10,
      cursor: 'text'
    }
  }, /*#__PURE__*/React.createElement(IcSearch, {
    size: 18,
    color: SNOONU.fg3
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: value ? SNOONU.fg1 : SNOONU.disabled,
      fontFamily: SNOONU.font,
      flex: 1
    }
  }, value || placeholder));
}
function SectionHeader({
  title,
  onSeeAll
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: SNOONU.fg1,
      fontFamily: SNOONU.font,
      letterSpacing: '-0.26px'
    }
  }, title), onSeeAll && /*#__PURE__*/React.createElement("span", {
    onClick: onSeeAll,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: SNOONU.brand,
      fontFamily: SNOONU.font,
      cursor: 'pointer'
    }
  }, "See all"));
}
function NavBar({
  title,
  onBack,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      gap: 12,
      flexShrink: 0,
      borderBottom: `1px solid ${SNOONU.border}`
    }
  }, onBack && /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      cursor: 'pointer',
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: SNOONU.bgApp
    }
  }, /*#__PURE__*/React.createElement(IcBack, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 18,
      fontWeight: 700,
      fontFamily: SNOONU.font,
      letterSpacing: '-0.26px'
    }
  }, title), right);
}
function Badge({
  children,
  color = SNOONU.brand,
  bg,
  pill = false,
  size = 'md'
}) {
  const bg_ = bg || color + '1A';
  const sz = size === 'sm' ? {
    fontSize: 10,
    padding: '2px 6px'
  } : {
    fontSize: 12,
    padding: '3px 8px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: bg_,
      color,
      fontWeight: 700,
      borderRadius: pill ? 100 : 6,
      fontFamily: SNOONU.font,
      display: 'inline-flex',
      alignItems: 'center',
      ...sz
    }
  }, children);
}
function SplusBadge({
  size = 'sm'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg,#FF5AC8,#FF5078,#FF8C28)',
      color: '#fff',
      fontWeight: 700,
      fontSize: size === 'sm' ? 10 : 13,
      padding: size === 'sm' ? '3px 8px' : '4px 12px',
      borderRadius: 6,
      fontFamily: SNOONU.font
    }
  }, "S+");
}
function Divider({
  mx = 16
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: SNOONU.border,
      margin: `0 ${mx}px`
    }
  });
}

// Export everything to window
Object.assign(window, {
  SNOONU,
  Ic,
  IcHome,
  IcBag,
  IcGrid,
  IcStar,
  IcUser,
  IcSearch,
  IcBack,
  IcHeart,
  IcCart,
  IcChevron,
  IcClock,
  IcLocation,
  IcMoto,
  IcStar2,
  StatusBar,
  BottomNav,
  SearchBar,
  SectionHeader,
  NavBar,
  Badge,
  SplusBadge,
  Divider
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/components.jsx", error: String((e && e.message) || e) }); }

})();
