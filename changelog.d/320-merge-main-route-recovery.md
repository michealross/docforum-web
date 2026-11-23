Restored the shared appointment loading, error and empty-state imports after the
main merge, and reconciled the admin and patient feature routes with the
data-router so the payments console, admin users and lab results screens remain
reachable. Registered the recovered routes in the breadcrumb and page-title
metadata so their names and parents resolve to real, translated labels instead
of a bare last URL segment.
