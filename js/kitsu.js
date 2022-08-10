const Kitsu = require("kitsu");
require("json");
const fs = require("fs");
const api = new Kitsu()

switch(process.argv[2]){
    case "Reviews":
        (async function loop() {
            let lists = [];
            var max_threads = await api.get('reviews', {
                params: {
                page: {
                    limit: 1,
                    offset: 1
                    }
                }
                })
                .then(res => {return res;})
                .catch(err => {
                    console.error(err)
                });
            max_threads = Math.round(max_threads['meta']['count']/20)+1;
            for (let i = 0; i < max_threads; i++) {
                offset = i*20;
                const r = await api.get('reviews', {
                    params: {
                        include: "media",
                    page: {
                        limit: 20,
                        offset: offset
                        }
                    }
                    })
                    .then(res => {return res;})
                    .catch(err => {
                        console.error(err)
                    });
                lists.push(r)
            }
            return lists;
        })().then(data=>{const abc = JSON.stringify(data);
                        fs.writeFileSync(process.argv[3], abc);
                        console.log("Extraction Complete!!!");}).catch(err => {console.error(err)});
        break;
    case "Anime":
        (async function loop() {
            let lists = [];
            var max_threads = await api.get('anime', {
                params: {
                page: {
                    limit: 1,
                    offset: 1
                    }
                }
                })
                .then(res => {return res;})
                .catch(err => {
                    console.error(err)
                });
            max_threads = Math.round(max_threads['meta']['count']/20)+1;
            for (let i = 0; i < max_threads; i++) {
                offset = i*20;
                const r = await api.get('anime', {
                    params: {
                        include: "categories,genres,castings,mediaRelationships,characters,staff,streamingLinks,animeProductions,animeCharacters,animeStaff,installments",
                    page: {
                        limit: 20,
                        offset: offset
                        }
                    }
                    })
                    .then(res => {return res;})
                    .catch(err => {
                        console.error(err)
                    });
                lists.push(r)
            }
            return lists;
        })().then(data=>{const abc = JSON.stringify(data);
                        fs.writeFileSync(process.argv[3], abc);
                        console.log("Extraction Complete!!!");}).catch(err => {console.error(err)});
        break;
    case "Manga":
        (async function loop() {
            let lists = [];
            var max_threads = await api.get('manga', {
                params: {
                page: {
                    limit: 1,
                    offset: 1
                    }
                }
                })
                .then(res => {return res;})
                .catch(err => {
                    console.error(err)
                });
            max_threads = Math.round(max_threads['meta']['count']/20)+1;
            for (let i = 0; i < max_threads; i++) {
                offset = i*20;
                const r = await api.get('manga', {
                    params: {
                        include: "categories,genres,castings,mediaRelationships,characters,staff,productions,mangaCharacters,mangaStaff,installments",
                    page: {
                        limit: 20,
                        offset: offset
                        }
                    }
                    })
                    .then(res => {return res;})
                    .catch(err => {
                        console.error(err)
                    });
                lists.push(r)
            }
            return lists;
        })().then(data=>{const abc = JSON.stringify(data);
                        fs.writeFileSync(process.argv[3], abc);
                        console.log("Extraction Complete!!!");}).catch(err => {console.error(err)});
        break;
    case "User":
        (async function loop() {
            let lists = [];
            var max_threads = await api.get('User', {
                params: {
                page: {
                    limit: 1,
                    offset: 1
                    }
                }
                })
                .then(res => {return res;})
                .catch(err => {
                    console.error(err)
                });
            max_threads = Math.round(max_threads['meta']['count']/20)+1;
            for (let i = 0; i < max_threads; i++) {
                offset = i*20;
                const r = await api.get('User', {
                    params: {
                        include: "pinnedPost,linkedAccounts,favorites,stats,categoryFavorites",
                    page: {
                        limit: 20,
                        offset: offset
                        }
                    }
                    })
                    .then(res => {return res;})
                    .catch(err => {
                        console.error(err)
                    });
                lists.push(r)
            }
            return lists;
        })().then(data=>{const abc = JSON.stringify(data);
                        fs.writeFileSync(process.argv[3], abc);
                        console.log("Extraction Complete!!!");}).catch(err => {console.error(err)});
        break;
    case "Groups":
        (async function loop() {
            let lists = [];
            var max_threads = await api.get('Groups', {
                params: {
                page: {
                    limit: 1,
                    offset: 1
                    }
                }
                })
                .then(res => {return res;})
                .catch(err => {
                    console.error(err)
                });
            max_threads = Math.round(max_threads['meta']['count']/20)+1;
            for (let i = 0; i < max_threads; i++) {
                offset = i*20;
                const r = await api.get('Groups', {
                    params: {
                        include: "members,neighbors,tickets,invites,reports,leaderChatMessages,category",
                    page: {
                        limit: 20,
                        offset: offset
                        }
                    }
                    })
                    .then(res => {return res;})
                    .catch(err => {
                        console.error(err)
                    });
                lists.push(r)
            }
            return lists;
        })().then(data=>{const abc = JSON.stringify(data);
                        fs.writeFileSync(process.argv[3], abc);
                        console.log("Extraction Complete!!!");}).catch(err => {console.error(err)});
        break;
    case "Posts":
        (async function loop() {
            let lists = [];
            var max_threads = await api.get('Posts', {
                params: {
                page: {
                    limit: 1,
                    offset: 1
                    }
                }
                })
                .then(res => {return res;})
                .catch(err => {
                    console.error(err)
                });
            max_threads = Math.round(max_threads['meta']['count']/20)+1;
            for (let i = 0; i < max_threads; i++) {
                offset = i*20;
                const r = await api.get('Posts', {
                    params: {
                        include: "media,ama,postLikes,comments,uploads",
                    page: {
                        limit: 20,
                        offset: offset
                        }
                    }
                    })
                    .then(res => {return res;})
                    .catch(err => {
                        console.error(err)
                    });
                lists.push(r)
            }
            return lists;
        })().then(data=>{const abc = JSON.stringify(data);
                        fs.writeFileSync(process.argv[3], abc);
                        console.log("Extraction Complete!!!");}).catch(err => {console.error(err)});
        break;
    case "Streamers":
        (async function loop() {
            let lists = [];
            var max_threads = await api.get('Streamers', {
                params: {
                page: {
                    limit: 1,
                    offset: 1
                    }
                }
                })
                .then(res => {return res;})
                .catch(err => {
                    console.error(err)
                });
            max_threads = Math.round(max_threads['meta']['count']/20)+1;
            for (let i = 0; i < max_threads; i++) {
                offset = i*20;
                const r = await api.get('Streamers', {
                    params: {
                        include: "streamingLinks,videos",
                    page: {
                        limit: 20,
                        offset: offset
                        }
                    }
                    })
                    .then(res => {return res;})
                    .catch(err => {
                        console.error(err)
                    });
                lists.push(r)
            }
            return lists;
        })().then(data=>{const abc = JSON.stringify(data);
                        fs.writeFileSync(process.argv[3], abc);
                        console.log("Extraction Complete!!!");}).catch(err => {console.error(err)});
        break;
    case "Testings":
        api.get('Streamers', {
            params: {
                include: "streamingLinks,videos",
            page: {
                limit: 10,
                offset: 1
                }
            }
            })
            .then(res => { console.log(JSON.stringify(res));})
            .catch(err => {
                console.error(err)
            });
        break;
    default:console.error("Illegal arguments");
        break;
}