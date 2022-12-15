// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, We Are ${config.name}. 
Welcome to Our website!
More about me:
'sumfetch' - short summary.
'enroll'   - for information about recruitment.
'domains'  - for information about Domains.
'domains'  - for information about Domains.
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};
export const reesume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  <div style="display: flex;">
  <pre>
      :'######::'##:::'##:'########::'########:'########::                                       
      '##... ##:. ##:'##:: ##.... ##: ##.....:: ##.... ##:
       ##:::..:::. ####::: ##:::: ##: ##::::::: ##:::: ##:
       ##:::::::::. ##:::: ########:: ######::: ########::
       ##:::::::::: ##:::: ##.... ##: ##...:::: ##.. ##:::
       ##::: ##:::: ##:::: ##:::: ##: ##::::::: ##::. ##::
      . ######::::: ##:::: ########:: ########: ##:::. ##:
       :......::::::..:::::........:::........::..:::::..::
       '########::'########::::'###:::::'######::'########:
       ##.... ##: ##.....::::'## ##:::'##... ##: ##.....::
       ##:::: ##: ##::::::::'##:. ##:: ##:::..:: ##:::::::
       ########:: ######:::'##:::. ##: ##::::::: ######:::
       ##.....::: ##...:::: #########: ##::::::: ##...::::
       ##:::::::: ##::::::: ##.... ##: ##::: ##: ##:::::::
       ##:::::::: ########: ##:::: ##:. ######:: ########:
       ..:::::::::........::..:::::..:::......:::........::
   :'######::'########:'##::: ##:'########:'########:'########::
   '##... ##: ##.....:: ###:: ##:... ##..:: ##.....:: ##.... ##:
    ##:::..:: ##::::::: ####: ##:::: ##:::: ##::::::: ##:::: ##:
    ##::::::: ######::: ## ## ##:::: ##:::: ######::: ########::
    ##::::::: ##...:::: ##. ####:::: ##:::: ##...:::: ##.. ##:::
    ##::: ##: ##::::::: ##:. ###:::: ##:::: ##::::::: ##::. ##::
   . ######:: ########: ##::. ##:::: ##:::: ########: ##:::. ##:
   :......:::........::..::::..:::::..:::::........::..:::::..::
  </pre>



<pre style="font: 8px/4px monospace;">                                                                  
                                                            
                                                            
                                                            
                                                            
                                                            
                       ^                                    
                    ~  _                                    
                   .- ^;                                    
                   o  ~:                                    
                  _;  :~                                    
                  e'  =^                                    
                 ~*   *                                     
                 =;   !                                     
                 !~  ^e                                     
                '%   -o                                     
                ~?   ;i                                     
                :e   ==                                     
                ;*   i+                                     
             ^  ;*   i+                                     
             ;  ;e   i=                               '     
            ^;  :?   ii                             ~^ __   
            ;-  -%   +*                           ^_ ^*_    
            o.  ^%.  :?                          ~_ ~?-     
            e^   ?_  ~%'                        ~_ -%_      
            !.   *i  '%_                     ' ^: ~%;       
            e~   ;?   !i                    _  + '?o        
         .^ o:   ^%~  i?                   +  +' o?'        
         +. +i    e=  _%~                 ;^ .: _%_         
         *~ ~?    :?  '%i                ^;  =  !e          
         ?-  ?-    ?:  o%'               =  ^: :%~          
         %:  +*    ;!  -%+            '~^;  +  !e           
         %=  '%~    ?_  !?            = +'  + -%_           
         !*   +!    _!  :%;          =^ i  .~ o?            
         o%    !=    *_  ??         ^o '+  :  %+            
         ;%-   ~%-   'e  :%+        i~ --  : _%.            
         ^%i    +%.   -;  !%'      '!  ;^  _ i?             
          e%'    i?^   :^ -%o      :=  =   _ !i             
          -%=     i!^   ~  i%-     o-  +   -'%_             
           *%^     =!^     '?!     ?   +   ~~%^             
      -    .%e      _!.     -%=   .e   ;   .:?              
      :^    :%=      'i~     i%-  -i   :   ^+*              
      -;     i%;       .'     !?' ;;   ~'   ==              
      '!      i%+             ^?o +_    .   o;              
       o;      =%i             -%;+~    ^   o_              
       .%.      :%e^            +%o.        o-              
        +!^      ^*%;            i%.        o~              
         o!^       -ee.           eo        =.              
          i?_        .=;          ^?_       +.              
           _?*^         '          :?       _.              
         '  'i%i.                   *+      .~ '__^         
          :^  ^=%e:'                ^?'      -+%eieo^       
           ;='   _i?*:^              +=      e*.  ^+!^      
            .oi-    ^-:_^           ~ !'    e=    _i.*      
              ^+*eo=;::-^           ^-;;   *;     :: i:     
                  '...'              +'e  o_         :_~    
                     ~'              ^;+-i.        ^o=;+    
              __      =o;_:+_'        o+o         ^e^       
               _e+-~-_^'-_~'          ;.+         !~        
                 -;;-    '    ^-      _~_        i=         
                         ';=ii:       ;''       ~?'         
                '--.._;-        '_    ;         e;          
                  '--^     ~_:;+;    ~         _?           
-                          '     '              !+           
^o-                 '~   ~:'    -~             :%'           
'   oo.                ':+;~     +:             ?=            
~'   _?o~                .    ^;e-              +%^            
=     +?e;^             ':+=i=-                ^%=             
_:      ;!%e+-^      '-+-                      *?'             
o~       ~=!%%%!eee?e;                        +%:              
*~         '.-__-.                          :%o               
'o;           '                           +%!'               
  -o=:__:+ii+-                         'o%e'                
-~  '~__-.   -:^  ':~~.^             '+%%i                  
 :='      ~io-^.;**=;o%%!o=+;:_~' ^:o%%!-                   
  ^io;:;i*+..-+eio!!+' _i!%!e**e!%%%?i-                     
     ^~.' ._^o=o%e_       '~_;+++;_^                        
  ^'    ^:. o:!e~                                           
   .~^~:-  i:i-                                             
    '^'   _+'                                               
    ~^   ^i                                                 
     __ ^=                                                  
      ^;_                                                 
</pre>
</div>
`
};
