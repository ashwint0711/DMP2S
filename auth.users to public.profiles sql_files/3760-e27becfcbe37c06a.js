!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b0bc011a-8148-4d6f-b938-9948e14cb93d",e._sentryDebugIdIdentifier="sentry-dbid-b0bc011a-8148-4d6f-b938-9948e14cb93d")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3760],{68258:function(e,t){var a,r,d,i,o,n,c,l,s,p,_,u,f,g;t.CU=t.Bm=t.Vb=t.fW=t.Ky=t.L9=t.h=t.$X=t.GJ=t.JwtSecretUpdateStatus=t.Nk=t.dw=t.QW=t.SL=void 0,(a=t.SL||(t.SL={})).ProjectPaused="project.paused",a.ProjectRestored="project.restored",a.ProjectRestoredFromLogicalBackup="project.restored_from_logical_backup",a.ProjectRestoredFromPitr="project.restored_from_pitr",a.ProjectRestoreInitiated="project.restore_initiated",a.ProjectFailedRestorationFromPitr="project.failed_restoration_from_pitr",a.ProjectPendingShutdown="project.pending_shutdown_notification",a.ProjectShutdownEligible="project.shutdown_eligible",a.ProjectJwtSecretUpdateStatusChange="project.jwt_secret_update_status_change",a.ProjectServiceConfigUpdate="project.service_config_update",a.ProjectSansKpsMigrationInitiated="project.sans_kps_migration_initiated",a.ProjectSansKpsMigrationCompleted="project.sans_kps_migration_completed",a.ProjectConfigUpdated="project.config_updated",a.ProjectDatabaseUpgradeStatusChange="project.database_upgrade_status_change",a.ProjectInfrastructureRestartOrResizeInitiated="project.infra_restart_or_resize_initiated",a.ProjectInfrastructureUpdated="project.infra_updated",a.ProjectInfrastructureRestarted="project.infra_restarted",a.PostgresqlRestart="postgresql.restart",a.ProjectWalgUpdated="project.walg_updated",a.ProjectSubscriptionUpdated="project.subscription_updated",a.ProjectDiskGrowth="project.disk_growth",a.ProjectSoftwareUpgraded="project.software_upgraded",a.ProjectTransfered="project.transfered",a.ProjectPhysicalBackupTransition="project.physical_backup_transition",a.ProjectIPv4AddressUpdate="project.network.ipv4_update",a.ProjectAddonUpdated="project.addon_updated",a.ProjectServiceLifecycleChange="project.service_lifecycle_change",a.ProjectReadReplicaSetupStatusChange="project.read_replica_setup_status_change",a.ProjectVolumeAttributeModification="project.volume_modification",a.ProjectRestoreFailed="project.restore_failed",a.ProjectRestoreCancelled="project.restore_cancelled",a.ProjectStorageArchiveCompleted="project.storage_archive_completed",(r=t.QW||(t.QW={})).DiskExpand="disk_expand",r.FilesystemGrow="fs_grow",(d=t.dw||(t.dw={})).Created="created",d.Resized="resized",d.Deleted="deleted",(i=t.Nk||(t.Nk={})).Enabled="enabled",i.Changed="changed",i.Disabled="disabled",(o=t.JwtSecretUpdateStatus||(t.JwtSecretUpdateStatus={}))[o.Updating=0]="Updating",o[o.Updated=1]="Updated",o[o.Failed=2]="Failed",(n=t.GJ||(t.GJ={}))[n.Started=0]="Started",n[n.RestartedPostgreSQL=1]="RestartedPostgreSQL",n[n.UpdatedAPIServicesConfiguration=2]="UpdatedAPIServicesConfiguration",n[n.RestartedAPIServices=3]="RestartedAPIServices",n[n.UpdatedDatabaseAdminAPIConfiguration=4]="UpdatedDatabaseAdminAPIConfiguration",n[n.UpdatedAPIGatewayConfiguration=5]="UpdatedAPIGatewayConfiguration",(c=t.$X||(t.$X={}))[c.PostgreSQLRestartFailed=0]="PostgreSQLRestartFailed",c[c.APIServicesConfigurationUpdateFailed=1]="APIServicesConfigurationUpdateFailed",c[c.APIServicesRestartFailed=2]="APIServicesRestartFailed",c[c.DatabaseAdminAPIConfigurationUpdateFailed=3]="DatabaseAdminAPIConfigurationUpdateFailed",c[c.SupabaseAPIKeyUpdateFailed=4]="SupabaseAPIKeyUpdateFailed",c[c.APIGatewayUpdateFailed=5]="APIGatewayUpdateFailed",(l=t.h||(t.h={}))[l.Upgrading=0]="Upgrading",l[l.Upgraded=1]="Upgraded",l[l.Failed=2]="Failed",(s=t.L9||(t.L9={})).Requested="0_requested",s.Started="1_started",s.LaunchedUpgradedInstance="2_launched_upgraded_instance",s.DetachedVolumeFromUpgradedInstance="3_detached_volume_from_upgraded_instance",s.AttachedVolumeToOriginalInstance="4_attached_volume_to_original_instance",s.InitiatedDataUpgrade="5_initiated_data_upgrade",s.CompletedDataUpgrade="6_completed_data_upgrade",s.DetachedVolumeFromOriginalInstance="7_detached_volume_from_original_instance",s.AttachedVolumeToUpgradedInstance="8_attached_volume_to_upgraded_instance",s.CompletedUpgrade="9_completed_upgrade",s.CompletedPostPhysicalBackup="10_completed_post_physical_backup",(p=t.Ky||(t.Ky={})).UpgradedInstanceLaunchFailed="1_upgraded_instance_launch_failed",p.VolumeDetachchmentFromUpgradedInstanceFailed="2_volume_detachchment_from_upgraded_instance_failed",p.VolumeAttachmentToOriginalInstanceFailed="3_volume_attachment_to_original_instance_failed",p.DataUpgradeInitiationFailed="4_data_upgrade_initiation_failed",p.DataUpgradeCompletionFailed="5_data_upgrade_completion_failed",p.VolumeDetachchmentFromOriginalInstanceFailed="6_volume_detachchment_from_original_instance_failed",p.VolumeAttachmentToUpgradedInstanceFailed="7_volume_attachment_to_upgraded_instance_failed",p.UpgradeCompletionFailed="8_upgrade_completion_failed",p.PostPhysicalBackupFailed="9_post_physical_backup_failed",(_=t.fW||(t.fW={}))[_.SettingUp=0]="SettingUp",_[_.Completed=1]="Completed",_[_.Failed=2]="Failed",(u=t.Vb||(t.Vb={})).Requested="0_requested",u.Started="1_started",u.LaunchedReadReplicaInstance="2_launched_read_replica_instance",u.InitiatedReadReplicaSetup="3_initiated_read_replica_setup",u.DownloadedBaseBackup="4_downloaded_base_backup",u.ReplayedWalArchives="5_replayed_wal_archives",u.CompletedReadReplicaSetup="6_completed_read_replica_setup",(f=t.Bm||(t.Bm={})).ReadReplicaInstanceLaunchFailed="1_read_replica_instance_launch_failed",f.InitiateReadReplicaSetupFailed="2_initiate_read_replica_setup_failed",f.DownloadBaseBackupFailed="3_download_base_backup_failed",f.ReplayWalArchivesFailed="4_replay_wal_archives_failed",f.CompleteReadReplicaSetupFailed="5_complete_read_replica_setup_failed",(g=t.CU||(t.CU={})).Updating="updating",g.Updated="updated",g.Failed="failed"},3558:function(e,t,a){a.d(t,{Z:function(){return r}});let r=(0,a(98266).Z)("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]])},90346:function(e,t,a){a.d(t,{f:function(){return s}});var r=a(83573),d=a(52983),i=a(36986);let o="horizontal",n=["horizontal","vertical"],c=(0,d.forwardRef)((e,t)=>{let{decorative:a,orientation:n=o,...c}=e,s=l(n)?n:o;return(0,d.createElement)(i.WV.div,(0,r.Z)({"data-orientation":s},a?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},c,{ref:t}))});function l(e){return n.includes(e)}c.propTypes={orientation(e,t,a){let r=e[t],d=String(r);return r&&!l(r)?Error(`Invalid prop \`orientation\` of value \`${d}\` supplied to \`${a}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${o}\`.`):null}};let s=c},77317:function(e,t,a){a.d(t,{VY:function(){return C},aV:function(){return F},fC:function(){return y},xz:function(){return w}});var r=a(83573),d=a(52983),i=a(12527),o=a(95831),n=a(80671),c=a(96501),l=a(36986),s=a(72929),p=a(29650),_=a(29028);let u="Tabs",[f,g]=(0,o.b)(u,[n.Pc]),m=(0,n.Pc)(),[h,b]=f(u),P=(0,d.forwardRef)((e,t)=>{let{__scopeTabs:a,value:i,onValueChange:o,defaultValue:n,orientation:c="horizontal",dir:u,activationMode:f="automatic",...g}=e,m=(0,s.gm)(u),[b,P]=(0,p.T)({prop:i,onChange:o,defaultProp:n});return(0,d.createElement)(h,{scope:a,baseId:(0,_.M)(),value:b,onValueChange:P,orientation:c,dir:m,activationMode:f},(0,d.createElement)(l.WV.div,(0,r.Z)({dir:m,"data-orientation":c},g,{ref:t})))}),j=(0,d.forwardRef)((e,t)=>{let{__scopeTabs:a,loop:i=!0,...o}=e,c=b("TabsList",a),s=m(a);return(0,d.createElement)(n.fC,(0,r.Z)({asChild:!0},s,{orientation:c.orientation,dir:c.dir,loop:i}),(0,d.createElement)(l.WV.div,(0,r.Z)({role:"tablist","aria-orientation":c.orientation},o,{ref:t})))}),v=(0,d.forwardRef)((e,t)=>{let{__scopeTabs:a,value:o,disabled:c=!1,...s}=e,p=b("TabsTrigger",a),_=m(a),u=I(p.baseId,o),f=S(p.baseId,o),g=o===p.value;return(0,d.createElement)(n.ck,(0,r.Z)({asChild:!0},_,{focusable:!c,active:g}),(0,d.createElement)(l.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":g,"aria-controls":f,"data-state":g?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:u},s,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{c||0!==e.button||!1!==e.ctrlKey?e.preventDefault():p.onValueChange(o)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&p.onValueChange(o)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==p.activationMode;g||c||!e||p.onValueChange(o)})})))}),U=(0,d.forwardRef)((e,t)=>{let{__scopeTabs:a,value:i,forceMount:o,children:n,...s}=e,p=b("TabsContent",a),_=I(p.baseId,i),u=S(p.baseId,i),f=i===p.value,g=(0,d.useRef)(f);return(0,d.useEffect)(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,d.createElement)(c.z,{present:o||f},({present:a})=>(0,d.createElement)(l.WV.div,(0,r.Z)({"data-state":f?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":_,hidden:!a,id:u,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:g.current?"0s":void 0}}),a&&n))});function I(e,t){return`${e}-trigger-${t}`}function S(e,t){return`${e}-content-${t}`}let y=P,F=j,w=v,C=U}}]);