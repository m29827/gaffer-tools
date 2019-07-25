#
# Copyright 2016-2019 Crown Copyright
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import sys

dirname = os.path.dirname(__file__)
gafferpy_core = os.path.join(dirname, '../../../../../gafferpy-core/src/main/python/')

if sys.path.count(gafferpy_core) is 0:
    sys.path.append(gafferpy_core)


import unittest
from unittest.mock import MagicMock

from gafferpy_pyspark import gafferpy_pyspark_core as core

class gaffer_pyspark_core_test(unittest.TestCase):

    def test_example(self):
        pass

    def test_AddElementsFromHdfsQuickstart_can_be_instantiated(self):
        add_op = core.AddElementsFromHdfsQuickstart()
        assert add_op is not None


if __name__ == "__main__":
    suite = unittest.TestLoader().loadTestsFromTestCase(gaffer_pyspark_core_test)
    unittest.TextTestRunner(verbosity=2).run(suite)
