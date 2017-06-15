## The problem I have

I need a note-taking app that meets below requirements:

* Support platforms: Mac, Arch Linux, Android, iOS
* Support "Always on top" on desktop platforms
* Support cloud synchronization
* Minimal text formatting

## The solution I made

Google Keep matches almost all above requirements except "Always on top", the little but essential one. So I give some spare time to do it by myself, this app is the result.

It hides all unnecessary parts of Google Keep that personally I don't need them in daily work, such as the banner and the scrollbar. It also has the default font face is "Operator Mono", a premium font that makes me feel good.

---

![OS X](/screenshot-osx.png?raw=true)

---

![Linux](/screenshot-linux.png?raw=true)

---

## Installation

1. Clone or download (then decompress) this repo
2. Open Chrome/Settings/Extensions, turn on `Developer mode`, press `Load unpacked extension...` and pick the directory where the repo was cloned (decompressed) to.
3. Open a new tab, press "Apps" on the bookmark bar and finally open `Google Keep`.

## Usage

* To reposition the app, hover the cursor on top-right of the app, a dragable area will appear.
  ![dragable](/draggable.png?raw=true)
* On Linux, the draggable area might not work with your window manager, bspwm in my case, use the way that the window manager provides to you.

## Legal

"Google Keep" and all similar trademarks are belong to Google or their owners. I don't own anything except source code in this repo.
