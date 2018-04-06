var GAME_LEVELS = [
  ["                                                                                      ",
   "                                                                                      ",
   "                        y y        oo                   y y                           ",
   "                         y        xxxx                   y       y y                  ",
   "           y y                                                  yyyyy                 ",
   "          yyyyy                                                  yyy                  ",
   "  xx       yyy             o  o          o  o                     y                   ",
   "  x         y            x  =   x      x   =  x                        y y        xx  ",
   "  x             o  o     xxxxxxxx      xxxxxxxx                         y          x  ",
   "  x                               x  x             x   x                           x  ",
   "  x           x  =   x            x!!x     y y     x!!!x                           x  ",
   "  x           xxxxxxxx            xxxx      y      xxxxx                           x  ",
   "  x                                                 x                              x  ",
   "  x              y y                                x  o         o o               x  ",
   "  x  @    x       y          h                      x                        h  o  x  ",
   "  xxxxxxxxx               xxxxxxx   xx   xxx    xxxxxxxxxx     xxxxxxx      xxxxxxxx  ",
   "          x            p  x     x =      x x       x!!x        x     x      x         ",
   "          xxxx       xxxxxx     x     =  x x       xxxx        x     x      x         ",
   "             x       x          x   =    x x                   x     x      x         ",
   "             xxxx =  x          x!!!!!!!!x xxxxxx    h    xxxxxx     x!!!!!!x         ",
   "                xxxxxx          x!!!!!!!!x      x    =    x          x!!!!!!x         ",
   "                                xxxxxxxxxx      xxxxxxxxxxx          xxxxxxxx         ",
   "                                                                                      "],
  ["xxxxxxxxxxxxxxxxx                                                                                                 ",
   "           v    x                                                                                                     ",
   "                x                                                                                                     ",
   "xxxxxxx         x                                                                                                     ",
   "      x         x                                                                                                     ",
   "  p   x        xx                                                                                                     ",
   "      x         x                                                                                                 ",
   "      x         x                                                                                                 ",
   "                x                                                                                                  ",
   "  o o           x                                                                                                 ",
   "xxxxxxx         x                                                                                                  ",
   "!!!!!!x         x                                                                                                 ",
   " v v vx         x                                                                                                 ",
   "      x        xx                                                                                                 ",
   "      x         x                                                                                                 ",
   "      xo        x                                                                                                 ",
   "      xx        x                                                                                                 ",
   "      x         x                                                                                                 ",
   "      x         x        xx                                                                                       ",
   "      x        xx     xxx                                                                                         ",
   "      x         xxxxxx                                                                                            ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "  o o                                                                                                             ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                              ",
   "                                                                                                         x    ",
   "                                                                                                         x    ",
   "                                                 h                                                       x    ",
   "                                                 x                                                       x    ",
   "                                                 !                                           x           x    ",
   "                                                !!!                                     x                x    ",
   "                                            x!!!!!!!!!x                                              h   x    ",
   "                                            xxxxxxxxxxx                      x             x         x   x    ",
   "                                                                                    x                    x    ",
   "x                                     x                     x             x                              x    ",
   "x                                    xx             x       x              x                             x    ",
   "x                                    vx    x          x      x                                           x    ",
   "x                                     x                       x                 x                        x    ",
   "x                                   xxxx       xx          o xx                                          x    ",
   "x                    oo             x                      xxxxxx                       oo               x    ",
   "x                   xxxx           x            x                xx                    xxxx              x    ",
   "x                    vv           x     x                          xx = x                              o x    ",
   "x                                x                  xx               xxxx    =    x                    xxx    ",
   "x                             xxx                                        xxxxxxxxxx=            =xxxxxxxxx    ",
   "x                           xx                 x       x                           xxxx!!!xxxxxx  x    x x    ",
   "x            !!!xxxxxxxxxxxx   h               v            o                          xxx        v    v x    ",
   "x            xxx         v  xxxxxx                          xx                           x               x    ",
   "x          xx                     x                        x                            v                x    ",
   "x      !!xx          oo                                    v               x                             x    ",
   "x  h   xx           xxxx                                                                                 x    ",
   "xxxxxxx                                    xx      xxxx               x                               o  x    ",
   "x                          x                                    x     v           xxxx      x         x  x    ",
   "x              xx=         x       xx                                                                    x    ",
   "x @          xxxx!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x    ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
