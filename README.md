# Windy City Pool Club

A Chicago-themed family billiards game. Open index.html in a modern browser, or run `python -m http.server 8000` in this directory and visit http://localhost:8000.

No installation or build required. Google Fonts are optional; the game also works offline.

## Play
Move the pointer (or tap) to aim. Hold the shot button to charge: the visible gauge rises from 10% to 100% in 1.2 seconds, falls back to 10%, and repeats. Release to shoot at the displayed power. Keyboard: focus the table, use left/right arrows to aim, then hold and release Space or Enter to shoot. Escape, losing focus, or a canceled touch cancels charging without shooting. Aim locks while charging.

Family face-off uses friendly house rules: every object ball, including the 8, is worth one point. Pocket a ball to continue. Missing or scratching passes the turn; pocketed balls still count on a scratch. The cue ball returns to an open spot automatically. Most balls wins once all 15 are pocketed. Solo practice counts the shots needed to clear the table.

Features fixed-step physics, ball collisions, cushion rebounds, six pockets, aim assistance, optional synthesized sounds, responsive layout, and two local players.

This intentionally uses family rules rather than regulation 8-ball.
