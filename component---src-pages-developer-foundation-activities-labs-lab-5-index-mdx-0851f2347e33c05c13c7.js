(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{foMr:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},p={_frontmatter:o},b=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,l({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Problem"),Object(a.b)("p",null,"The Hyper Drive isn’t working and we need to find out why. Let’s debug the ",Object(a.b)("inlineCode",{parentName:"p"},"hyper-drive")," deployment so that we can reach light speed again."),Object(a.b)("p",null,"Here are some tips to help you solve the Hyper Drive:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check the description of the ",Object(a.b)("inlineCode",{parentName:"li"},"deployment"),"."),Object(a.b)("li",{parentName:"ul"},"Get and save the logs of one of the broken ",Object(a.b)("inlineCode",{parentName:"li"},"pods"),"."),Object(a.b)("li",{parentName:"ul"},"Are the correct ",Object(a.b)("inlineCode",{parentName:"li"},"ports")," assigned."),Object(a.b)("li",{parentName:"ul"},"Make sure your ",Object(a.b)("inlineCode",{parentName:"li"},"labels")," and ",Object(a.b)("inlineCode",{parentName:"li"},"selectors")," are correct."),Object(a.b)("li",{parentName:"ul"},"Check to see if the ",Object(a.b)("inlineCode",{parentName:"li"},"Probes")," are correctly working."),Object(a.b)("li",{parentName:"ul"},"To fix the deployment, save then modify the yaml file for redeployment.")),Object(a.b)("h2",null,"Solution"),Object(a.b)("h3",null,"Setup environment"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Execute the command to create the Deployement, Namespace, Service below definition."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0})," oc apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/lab-setup/lab-5-debug-k8s-setup.yaml\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Check the status of the POD."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{})," oc get pods -n {DEV_NAMESPACE}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Check the description of the deployment."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{})," oc describe deployment hyper-drive -n {DEV_NAMESPACE}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Save logs for broken pod."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{})," oc logs <pod name> -n {DEV_NAMESPACE} > /home/cloud_user/debug/broken-pod-logs.log\n")),Object(a.b)("p",{parentName:"li"},"In the description you will see the following is wrong:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Selector and Label names do not match."),Object(a.b)("li",{parentName:"ul"},"The Probe is TCP instead of HTTP Get."),Object(a.b)("li",{parentName:"ul"},"The Service Port is 80 instead of 8080."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To fix problem, can’t do oc edit on deployement, need to delete and recreate the deployment. So export deployement and do the necessary  changes and recreate it."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{})," oc get deployment <deployment name> -n {DEV_NAMESPACE} -o yaml --export > hyper-drive.yml\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Delete the existing deployement."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{})," oc delete deployment <deployment name> -n {DEV_NAMESPACE}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Edit the exported YAML file and apply."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{})," oc apply -f hyper-drive.yml -n {DEV_NAMESPACE}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Verify the deployement."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{})," oc get deployment <deployment name> -n {DEV_NAMESPACE}\n")))),Object(a.b)("h2",null,"Validate"),Object(a.b)("p",null," Once you get the Hyper Drive working again. Verify it by checking the endpoints."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{})," kubectl get ep hyper-drive\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-5-index-mdx-0851f2347e33c05c13c7.js.map