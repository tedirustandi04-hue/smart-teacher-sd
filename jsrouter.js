case '#tool-modul-ajar':
                this.appContent.innerHTML = window.ToolModulAjar.render();
                window.ToolModulAjar.initEvents();
                lucide.createIcons();
                break;
            case '#tool-bahan-ajar':
                this.appContent.innerHTML = window.ToolBahanAjar.render();
                window.ToolBahanAjar.initEvents();
                lucide.createIcons();
                break;
            case '#tool-lkpd':
                this.appContent.innerHTML = window.ToolLKPD.render();
                window.ToolLKPD.initEvents();
                lucide.createIcons();
                break;
            case '#tool-media':
                this.appContent.innerHTML = window.ToolMedia.render();
                window.ToolMedia.initEvents();
                lucide.createIcons();
                break;