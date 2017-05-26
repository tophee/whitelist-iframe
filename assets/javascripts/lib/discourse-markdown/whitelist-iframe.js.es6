import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.youtube\.[a-z]{2,3}\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/books.google\.[a-z]{2,3}\/.+&output=embed.*/i);
