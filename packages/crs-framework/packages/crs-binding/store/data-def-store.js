import"./../validation/validation-ui.js";class p{#t={};#e={};#s={};#n={};#o={};get store(){return this.#t}#a(t,e,o,s,n){let a=t[e];n=n.replace("$context.","context."),a[n]||=new Set,a[n].add(`${o}.${s}`)}async#i(t,e){const o=e.name;for(const s of Object.keys(e.fields)){const n=e.fields[s];await this.#l(n,t,o,s),await this.#r(n,t,o,s)}}async#l(t,e,o,s){if(t.conditionalDefaults!=null)for(const n of t.conditionalDefaults){const a=await crs.binding.expression.sanitize(n.conditionExpr);for(let r of a.properties)this.#a(this.#n,e,o,s,r);const i=`
                    const context = crs.binding.data.getData(bid).data;
                    return ${a.expression}
                    `,l=new crs.classes.AsyncFunction("bid",i);this.addDefaultsAutomation(e,o,s,l,n.value,n.true_value,n.false_value)}delete t.conditionalDefaults}async#c(t,e,o,s){if(t.defaultValidations!=null)for(const n of Object.keys(t.defaultValidations)){const a=n,i=t.defaultValidations[n],l=`${o}.${s}`.replace("context.","");crs.binding.ui.apply(e,l,a,i)}delete t.defaultValidations}async#r(t,e,o,s){if(t.conditionalValidations!=null)for(const n of t.conditionalValidations){const a=await crs.binding.expression.sanitize(n.conditionExpr);for(let c of a.properties)this.#a(this.#o,e,o,s,c);const i=`
                    const context = crs.binding.data.getData(bid).data;
                    return ${a.expression}
                    `,l=new crs.classes.AsyncFunction("bid",i),r=[];for(const c of Object.keys(n.rules)){const u=n.rules[c],d=u.value,f=u.required||!0;r.push({rule:c,value:d,required:f})}this.addValidationAutomation(e,o,s,l,r)}delete t.conditionalValidations}async register(t,e){e=JSON.parse(JSON.stringify(e));const o=e.name.split(".");let s=this.#t[t]||={},n=this.#e[t]||={};this.#n[t]||={},this.#o[t]||={},this.#s[t]||={};for(let i=0;i<o.length;i++)i<o.length-1&&(s=s[o[i]]||={}),n=n[o[i]]||={};const a=o[o.length-1];s[a]=e,await this.#i(t,e)}async unRegister(t){delete this.#t[t],delete this.#e[t],delete this.#n[t],delete this.#o[t],delete this.#s[t]}addDefaultsAutomation(t,e,o,s,n,a,i){let l=this.#e[t];for(const u of e.split("."))l=l[u];const r=l[o]||=[],c={condition:s};n!=null&&(c.value=n),a!=null&&(c.trueValue=a),i!=null&&(c.falseValue=i),r.push(c)}addValidationAutomation(t,e,o,s,n){const a=`${e}.${o}`.replace("context.","");let i=this.#s[t];(i[a]||=[]).push({condition:s,def:n})}removeAutomation(t,e){delete this.#e[t][e]}remove(t){delete this.#t[t],delete this.#e[t],delete this.#n[t]}async automateValues(t,e){if(this.#n[t]==null)return;e.indexOf(".")==-1&&(e=`context.${e}`);const o=this.#n[t][e];if(o!=null)for(const s of o){let n=this.#e[t];const a=s.split(".");for(const i of a)n=n[i];for(const i of n){const l=await i.condition(t),r=i.value||i.trueValue;l==!0?await crs.binding.data.setProperty(t,s,r):i.falseValue!=null&&await crs.binding.data.setProperty(t,s,i.falseValue)}}}async automateValidations(t,e){if(this.#o[t]==null)return;const o=this.#o[t][e];if(o!=null)for(const s of o){const n=this.#s[t][s];for(const a of n){const i=await a.condition(t);for(const l of a.def)l.required=i,await crs.binding.ui.apply(t,s,l.rule,l)}}}async create(t,e){let o=this.#t[t];const s=e.split(".");for(const a of s)o=o[a];const n={};for(const a of Object.keys(o.fields))n[a]=o.fields[a].default||null;await crs.binding.data.setProperty(t,e,n)}validate(t,e,o){}async applyValidations(t){const e=this.#t[t];for(const o of Object.keys(e)){const s=e[o],n=s.name;for(const a of Object.keys(s.fields)){const i=s.fields[a];await this.#c(i,t,n,a)}}}}crs.binding.dataDef=new p;export{p as DataDefStore};