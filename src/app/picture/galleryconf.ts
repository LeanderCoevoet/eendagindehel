// gallery configuration
/*import {GALLERY_CONF, GALLERY_IMAGE} from 'ngx-image-gallery';

export const DEMO_GALLERY_CONF_INLINE: GALLERY_CONF = {
    imageOffset: '0px',
    imagePointer: true,
    showDeleteControl: false,
    showCloseControl: false,
    showExtUrlControl: false,
    closeOnEsc: true,
    showImageTitle: false,
    inline: true,
    backdropColor: 'default'
};

export const DEMO_GALLERY_CONF: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showCloseControl: true,
    showImageTitle: false,
    inline: false,
    backdropColor: 'rgba(13,13,14,0.85)'
};

// gallery images
export const DEMO_GALLERY_IMAGE: GALLERY_IMAGE[] = [
    {
        url: '../../assets/img/pictures/2018/web_def/0001.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0001_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0002.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0002_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0003.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0003_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0004.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0004_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0005.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0005_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0006.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0006_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0007.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0007_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0008.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0008_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0009.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0009_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0011.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0011_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0012.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0012_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0013.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0013_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0014.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0014_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0015.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0015_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0016.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0016_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0017.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0017_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0018.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0018_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0019.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0019_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0020.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0020_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0021.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0021_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0022.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0022_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0023.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0023_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0024.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0024_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0025.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0025_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0026.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0026_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0027.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0027_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0028.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0028_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0029.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0029_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0030.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0030_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0031.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0031_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0032.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0032_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0033.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0033_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0034.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0034_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0035.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0035_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0036.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0036_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0037.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0037_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0038.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0038_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0039.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0039_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0040.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0040_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0041.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0041_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0042.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0042_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0043.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0043_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0044.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0044_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0045.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0045_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0046.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0046_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0047.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0047_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0048.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0048_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0049.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0049_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0050.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0050_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0051.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0051_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0052.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0052_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0053.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0053_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0054.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0054_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0055.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0055_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0056.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0056_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0057.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0057_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0058.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0058_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0059.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0059_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0060.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0060_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0061.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0061_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0062.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0062_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0063.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0063_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0064.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0064_tn.jpg'
    },
    {
        url: '../../assets/img/pictures/2018/web_def/0065.jpg',
        thumbnailUrl: '../../assets/img/pictures/2018/thumbnails/0065_tn.jpg'
    }
];*/