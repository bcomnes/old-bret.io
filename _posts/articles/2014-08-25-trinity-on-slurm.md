---
layout: article
published: true
title: Running Trinity RNA-SEQ with Slurm
date: "2014-08-25 11:39"
---

At [ PSU-ARC ](http://www.pdx.edu/arc/academic-and-research-computing) we were having some issues running [ Trinity RNA-SEQ ](http://trinityrnaseq.sourceforge.net/#Computing_Grid) on our [ Hydra Cluster ](http://arc-docs.readthedocs.org/en/latest/linux-clusters.html#hydra-cluster) running the [Rocks Cluster Distributionn](http://central6.rocksclusters.org/roll-documentation/base/6.1.1/) with the [Slurm Workload Manager](http://slurm.schedmd.com) roll.  Trinity works in two phases, first it does a lot of memory intensive computation on a single node (server), then begins queuing many smaller Slrum jobs that can be distributed across multiple nodes.  

In order to allow Trinity to launch new and separate Slurm jobs, one must ensure that the compute node the primary Trinity job is launched on is allowed to launch new jobs.

The parameter that determines if nodes can launch new jobs is the node list specified in `AllocNodes` ( http://slurm.schedmd.com/scontrol.html ) for a given Slurm partition.  You can check this setting with the following command:

```sh
sconrol show partition
```

By far the simplest thing to do is to allow all nodes to launch new jobs:

```sh
AllocNodes=ALL
```
