const MINA_BUILTIN_TAGS = [
  'cover-image',
  'cover-view',
  'movable-area',
  'movable-view',
  'scroll-view',
  'swiper',
  'swiper-item',
  'view',

  'icon',
  'progress',
  'rich-text',
  'text',

  'button',
  'checkbox',
  'checkbox-group',
  'editor',
  'form',
  'input',
  'label',
  'picker',
  'picker-view',
  'picker-view-column',
  'radio',
  'radio-group',
  'slider',
  'switch',
  'textarea',

  'functional-page-navigator',
  'navigator',

  'audio',
  'camera',
  'image',
  'live-player',
  'live-pusher',
  'video',

  'map',

  'canvas',

  'ad',
  'official-account',
  'open-data',
  'web-view',

  'navigation-bar',

  'page-meta',

  'block',
  'slot',
]

/**
 * @param {string} tag
 * @returns {boolean}
 */
module.exports = tag => tag && MINA_BUILTIN_TAGS.indexOf(tag) !== -1
