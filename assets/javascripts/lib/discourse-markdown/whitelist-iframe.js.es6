import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.youtube\.(gr|pt|ae|au|com|de|fr|se|ca|co.uk|es|dk|co.za|fi|cz|be|nl|at|cn|com.br|jp|it|is|in|ie|id|mx|tr)\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.facebook\.com\/plugins\/.+/i);
whiteListIframe(/^(https?:)?\/\/books.google\.(gr|pt|ae|au|com|de|fr|se|ca|co.uk|es|dk|co.za|fi|cz|be|nl|at|cn|com.br|jp|it|is|in|ie|id|mx|tr)\/.+&output=embed.*/i);
whiteListIframe(/^(https?:)?\/\/kunsido.net\.net\/.+/i);
whiteListIframe(/^(https?:)?\/\/forum.kunsido.net\.net\/.+/i);
