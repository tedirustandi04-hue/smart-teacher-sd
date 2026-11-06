switch(hash) {
            case '#dashboard':
                this.appContent.innerHTML = this.getDashboardHTML();
                this.initDashboardCharts();
                break;
            case '#profile-school':
                this.appContent.innerHTML = window.schoolDataService.renderProfileFormContainer();
                window.schoolDataService.initFormEvents();
                lucide.createIcons();
                break;
            case '#tool-cp':
                this.appContent.innerHTML = window.ToolCP.render();
                window.ToolCP.initEvents();
                lucide.createIcons();
                break;
            case '#tool-tp':
                this.appContent.innerHTML = window.ToolTP.render();
                window.ToolTP.initEvents();
                lucide.createIcons();
                break;
            case '#tool-atp':
                this.appContent.innerHTML = window.ToolATP.render();
                window.ToolATP.initEvents();
                lucide.createIcons();
                break;
            case '#tool-prota':
                this.appContent.innerHTML = window.ToolPROTA.render();
                window.ToolPROTA.initEvents();
                lucide.createIcons();
                break;
            case '#tool-promes':
                this.appContent.innerHTML = window.ToolPROMES.render();
                window.ToolPROMES.initEvents();
                lucide.createIcons();
                break;
            case '#tool-kalender':
                this.appContent.innerHTML = window.ToolKalender.render();
                window.ToolKalender.initEvents();
                lucide.createIcons();
                break;
            default:
                const toolName = hash.replace('#', '').replace(/-/g, ' ').toUpperCase();
                this.appContent.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-64 text-slate-500">
                        <i data-lucide="wrench" class="w-16 h-16 mb-4 text-slate-300"></i>
                        <h2 class="text-2xl font-bold text-slate-700">${toolName}</h2>
                        <p class="mt-2 text-sm text-slate-500">Modul ini siap dikembangkan pada tahap selanjutnya.</p>
                    </div>
                `;
                lucide.createIcons();
                break;
        }