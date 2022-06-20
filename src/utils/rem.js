const baseSize = 16;
// 设计稿尺寸
const designScrenWidth = 1920;
// 最大放大倍数
const maxScale = 2;

/**
 * 设置rem
 * 根据实际屏幕宽度计算实际rem值
 * rem基础值为16px, 即设计稿css中16px为1rem
 * 例如：设计稿1440px，实际屏幕宽度为1920px, 则计算后实际rem值为21.33px
 * 此时某元素宽度设计为32px，在实际屏幕上显示为42.67px
 */
function setRem() {
  let scale = document.documentElement.clientWidth / designScrenWidth;
  scale < 1 && (scale = 1);
  document.documentElement.style.fontSize = `${baseSize * Math.min(scale, maxScale)}px`;
}

setRem();

window.onresize = () => {
  setRem();
};
